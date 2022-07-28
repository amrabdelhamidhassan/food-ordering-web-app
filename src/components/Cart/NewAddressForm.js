import Input from "../Login/Input"
import {addressTextErrorMsg,addressNoErrorMsg,phoneErrorMsg,addressText,addressNo,addressPhone} from "../../helperFunctions/ValidationRules"
import Button from "../UI/Button";
import styles from './NewAdressForm.module.css'
import FormWrapper from "../Login/FormWrapper";
import { useState ,useEffect,useCallback} from "react";
function NewAdressForm(props) {
    const [submited,setSubmited]=useState(false);
    const [nameIsValid,setNameIsValid]=useState(false)
    const [buildingNoIsValid,setBuildingNoIsValid]=useState(false)
    const [cityIsValid,setCityIsValid]=useState(false)
    const [areaIsValid,setAreaIsValid]=useState(false)
    const [descriptionIsValid,setDescriptionIsValid]=useState(false)
    const [streetNameIsValid,setStreetNameIsValid]=useState(false)
    const [floorIsValid,setFloorIsValid]=useState(false)
    const [apartmentNoIsValid,setApartmentNoIsValid]=useState(false)
    const [phoneNoIsValid,setphoneNoIsValid]=useState(false)
    const [name,setName]=useState(props.address.name)
    const [buildingNo,setBuildingNo]=useState(props.address.buildingNo)
    const [city,setCity]=useState(props.address.city)
    const [area,setArea]=useState(props.address.area)
    const [description,setDescription]=useState(props.address.description)
    const [streetName,setStreetName]=useState(props.address.streetName)
    const [floor,setFloor]=useState(props.address.floor)
    const [apartmentNo,setApartmentNo]=useState(props.address.apartmentNo)
    const [phoneNo,setPhoneNo]=useState(props.address.phoneNo)
    const [formError,setFormError]=useState(false)
    useEffect(()=>{
        if(submited)
        {
            if(!(nameIsValid &&buildingNoIsValid&&cityIsValid&&areaIsValid&&descriptionIsValid&&streetNameIsValid&&floorIsValid
                &&apartmentNoIsValid&&phoneNoIsValid))
            {
                
                  setFormError("Complete All Missing Fields")
            }
            else 
            {
              setFormError(null)
            }
        }
    })
    const ValidateName=(value)=>
    {
        if(!addressText.test(value.trim()))
            {setNameIsValid(false); return addressTextErrorMsg}
        else 
            {setNameIsValid(true);return null;}
    }

    const ValidateBuildingNo=(value)=>
    {
        if(!addressNo.test(value))
            {setBuildingNoIsValid(false); return addressNoErrorMsg}
        else 
            {setBuildingNoIsValid(true);return null;}
    }
    const ValidateCity=(value)=>
    {
        if(!addressText.test(value.trim()))
            {setCityIsValid(false); return addressTextErrorMsg}
        else 
            {setCityIsValid(true);return null;}
    }
    const ValidateArea=(value)=>
    {
        if(!addressText.test(value.trim()))
            {setAreaIsValid(false); return addressTextErrorMsg}
        else 
            {setAreaIsValid(true);return null;}
    }
    const ValidateDescription=(value)=>
    {
        if(!addressText.test(value.trim()))
            {setDescriptionIsValid(false); return addressTextErrorMsg}
        else 
            {setDescriptionIsValid(true);return null;}
    }
    const ValidateStreetName=(value)=>
    {
        if(!addressText.test(value.trim()))
            {setStreetNameIsValid(false); return addressTextErrorMsg}
        else 
            {setStreetNameIsValid(true);return null;}
    }
    const ValidateFloorNo=(value)=>
    {
        if(!addressNo.test(value))
            {setFloorIsValid(false); return addressNoErrorMsg}
        else 
            {setFloorIsValid(true);return null;}
    }
    const ValidateApartmentNo=(value)=>
    {
        if(!addressNo.test(value))
            {setApartmentNoIsValid(false); return addressNoErrorMsg}
        else 
            {setApartmentNoIsValid(true);return null;}
    }
    const ValidatePhoneNo=(value)=>
    {
        if(!addressPhone.test(value.trim()))
            {setphoneNoIsValid(false); return phoneErrorMsg}
        else 
            {setphoneNoIsValid(true);return null;}
    }
    const GetName=useCallback((value)=>
    {
        setName(value);
    }
    ,[])
    const GetBuildingNo=useCallback((value)=>
    {
        setBuildingNo(value);
    }
    ,[])

    const GetStreetName=useCallback((value)=>
    {
        setStreetName(value);
    }
    ,[])

    const GetCityName=useCallback((value)=>
    {
        setCity(value);
    }
    ,[])

    const GetArea=useCallback((value)=>
    {
        setArea(value);
    }
    ,[])

    const GetDescription=useCallback((value)=>
    {
        setDescription(value);
    }
    ,[])

    const GetFloor=useCallback((value)=>
    {
        setFloor(value);
    }
    ,[])

    const GetApartmentNo=useCallback((value)=>
    {
        setApartmentNo(value);
    }
    ,[])

    const GetPhoneNo=useCallback((value)=>
    {
        setPhoneNo(value);
    }
    ,[])

    const OrderHandler=(e)=>
    {
        e.preventDefault()
        setSubmited(true)
        if(nameIsValid &&buildingNoIsValid&&cityIsValid&&areaIsValid&&descriptionIsValid&&streetNameIsValid&&floorIsValid
            &&apartmentNoIsValid&&phoneNoIsValid)
        {
            const address=
            {
                
                name:name,
                buildingNo:buildingNo,
                city:city,
                area:area,
                description:description,
                streetName:streetName,
                floor:floor,
                apartmentNo:apartmentNo,
                phoneNo:phoneNo,
            }
            console.log(address)
            const order=
            {

                address:address,
            }
            console.log(order)
        }
        else 
        {
            console.log("error")
        }
    }
    return (
      <form onSubmit={OrderHandler}>
        <FormWrapper>
                <Input
                    id='name'
                    label='Address Name'
                    name='name'
                    type='text'
                    initial={props.address.name.toString()}
                    maxLength={30}
                    checkValidity={ValidateName}
                    setValue={GetName}
                    submited={submited}
                />
                <Input
                    id='city'
                    label='City'
                    name='city'
                    initial={props.address.city.toString()}
                    type='text'
                    maxLength={20}
                    checkValidity={ValidateCity}
                    setValue={GetCityName}
                    submited={submited}
                />
                <Input
                    id='area'
                    label='Area'
                    name='area'
                    type='text'
                    initial={props.address.area.toString()}
                    maxLength={20}
                    checkValidity={ValidateArea}
                    setValue={GetArea}
                    submited={submited}

                />
                <Input
                    id='street'
                    label='Street Name'
                    name='street'
                    type='text'
                    initial={props.address.streetName.toString()}
                    maxLength={20}
                    checkValidity={ValidateStreetName}
                    setValue={GetStreetName}
                    submited={submited}

                />
                <Input
                    id='building'
                    label='Building No.'
                    name='building'
                    type='number'
                    initial={props.address.buildingNo.toString()}
                    maxLength={5}
                    checkValidity={ValidateBuildingNo}
                    setValue={GetBuildingNo}
                    submited={submited}

                />
                <Input
                    id='floor'
                    label='Floor'
                    name='floor'
                    type='number'
                    initial={props.address.floor.toString()}
                    maxLength={2}
                    checkValidity={ValidateFloorNo}
                    setValue={GetFloor}
                    submited={submited}

                />
                <Input
                    id='apartment'
                    label='Apartment No.'
                    name='apartment'
                    type='number'
                    initial={props.address.apartmentNo.toString()}
                    maxLength={5}
                    checkValidity={ValidateApartmentNo}
                    setValue={GetApartmentNo}
                    submited={submited}

                />
                <Input
                    id='description'
                    label='Description'
                    name='description'
                    type='text'
                    initial={props.address.description.toString()}
                    maxLength={50}
                    checkValidity={ValidateDescription}
                    setValue={GetDescription}
                    submited={submited}

                />
                <Input
                    id='phone'
                    label='Phone'
                    name='phone'
                    type='text'
                    initial={props.address.phoneNo.toString()}
                    maxLength={14}
                    checkValidity={ValidatePhoneNo}
                    setValue={GetPhoneNo}
                    submited={submited}

                />                                                                
                {!!formError&&<p className={styles.formError}>{formError}</p>}
                <Button type='submit' name='Confirm Order'/>
            </FormWrapper>

      </form>
    );
  }
  
  export default NewAdressForm;
  