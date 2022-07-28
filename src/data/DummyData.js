export const getDummyCategories=()=>
{
    let categories=[];
    for(let i=1;i<=10;i++)
    {
        let category={};
        category.id=i;
        category.name='Category '+i
        let subCategories=[];
        for(let j=1;j<=5;j++)
        {
            let subCategory={};
            subCategory.id=j;
            subCategory.name='SubCategory '+j
            subCategories.push(subCategory)
        }
        category.subCategories=subCategories
        categories.push(category)
    }
    return categories;
}
export const getDummyProducts=()=>
{
    let products=[];
    for(let i=0;i<17;i++)
    {
        let product={};
        product.id=i;
        product.name=`Product ${i}`
        product.price=(Math.random()*400).toFixed(2);
        product.img=null;
        product.stock=10;
        product.description="Pearla Balady Bread 5 Pcs is sold on Talabat by talabat mart and will be delivered to you across egypt within 20 - 30 minutes. Shop online and enjoy our quick delivery service.";
        products.push(product);
    }
    return products
}
export const getDummyAdresses=()=>
{
    let addresses=[];
    for(let i=0;i<20;i++)
    {
        let address={};
        address.id=i;
        address.name=`Address ${i}`
        address.buildingNo=Math.floor((Math.random()*20));
        address.city='Cairo';
        address.area='Heliopolis';
        address.description='بجوار جامع الفتح';
        address.streetName=`Street ${i}`;
        address.floor=Math.floor((Math.random()*11));
        address.apartmentNo= address.floor*Math.floor((Math.random()*10));
        address.phoneNo="01140083012";
        addresses.push(address);
    }
    return addresses
}
export const DummyEmptyAdress=
{
    name:"",
    buildingNo:"",
    city:"",
    area:"",
    description:"",
    streetName:"",
    floor:"",
    apartmentNo:"",
    phoneNo:"",
}
export const DummyUser={
    id:1,
    fname:'Amr',
    lname:'Abdelhamid',
    email:'amrabdelhamidhassan@gmail.com',
    token:'1'
}