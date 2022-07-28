import { createSlice } from '@reduxjs/toolkit'
const initialState=
{
    cart:[],
    numberOfitems:0,
    totalPrice:0
}
const cartSlice=createSlice(
    {
        name:'cart',
        initialState,
        reducers:
        {
            addToCart(state,action)
            {
                let existingitem=state.cart.find(item=>item.id==action.payload.id)
                if(existingitem)
                {
                    state.cart=state.cart.map(item=>
                        {
                            if(item.id==action.payload.id)
                            {
                                if(item.stock>item.itemNumber)
                                {
                                    state.numberOfitems+=1;
                                    state.totalPrice+=(+action.payload.price);
                                    return{
                                        ...item,itemNumber:item.itemNumber+1
                                    }
                                }
                                else return item;
                            
                            }
                            else return item;
                        })
                }
                else
                {
                    if(action.payload.stock>0)
                    {
                        state.cart.push(
                            {
                                ...action.payload,itemNumber:1
                            }
                        )
                        state.numberOfitems+=1;
                        state.totalPrice+=(+action.payload.price);
                    }
                }
            },
            removeFromCart(state,action)
            {
                let existingitem=state.cart.find(item=>item.id==action.payload.id)
                if(existingitem)
                {
                    if(existingitem.itemNumber<2)
                    {
                        state.cart=state.cart.filter(item=>item.id!=action.payload.id)
                        if(state.numberOfitems>0){
                            state.numberOfitems-=1;
                            state.totalPrice-=(+action.payload.price);
                        }
    
                    }
                    else
                    {
                        state.cart=state.cart.map(item=>
                            {
                                if(item.id==action.payload.id)
                                {
                                    return{
                                        ...item,itemNumber:item.itemNumber-1
                                    }
                                }
                                else return item;
                            })
                            if(state.numberOfitems>0)
                            {
                                state.numberOfitems-=1;
                                state.totalPrice-=(+action.payload.price);
                            }
    
                    }
                }
                if(state.numberOfitems<=0)
                {
                    state.numberOfitems=0;
                    state.totalPrice=0;
                }

            },
            clearCart(state)
            {
                state.cart=[]
                state.numberOfitems=0
                state.totalPrice=0
            }
        }
    }
)

export const cartActions=cartSlice.actions;
export default cartSlice.reducer