//**********************************Validation Regex*********************************************//
export const validEmail = new RegExp( '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
export const validPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$")
export const validName=new RegExp("^[a-zA-Z]+.{2,15}$")
export const addressText=new RegExp("^[a-z A-Zا-ى]+.{2,50}$")
export const addressNo=new RegExp("^[0-9]")
export const addressPhone=new RegExp("^[0-9]+.{7,12}$")



//**********************************Validation Messages*********************************************//

export const passwordErrorMsg='Password from 8 to 20 char at least 1 uppercase , 1 lowercase ,1 number'
export const emailErrorMsg='Please Enter Valid Email'
export const nameErrorMsg='Please Enter Valid Name without Spaces'
export const addressTextErrorMsg='Please fill Text Correctly'
export const addressNoErrorMsg='Numbers Only Allowed'
export const phoneErrorMsg='Please Enter Valid Phone'