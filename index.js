const btn=document.getElementById("btn");
btn.addEventListener("click",myfun);

function myfun(){
    let bill=document.getElementById("bill").value;
    let tip=document.getElementById("tip").value;
    let person=document.getElementById("person").value;
    if(bill==='' || tip===''||  person==='' )
    {
        alert("Enter Values");
    }
    else if(bill<0 || tip<0 || person<0)
    {
        alert("Enter positive values");

    }
    else if(person==0)
    alert("Enter persons greater than '0'")
    else{
    bill=Number(bill);
    tip=Number(tip);
    person=Number(person);
    let totalBill=((bill*tip)/100)+bill;
    
    let perPerson=(bill*(tip/100))/person;
    perPerson = parseInt(perPerson);
    document.getElementById("tipPerPerson").value="Tip per Person "+perPerson+" Rs";
    
    let billPerPerson=totalBill/person;
     billPerPerson = parseInt(billPerPerson);
    document.getElementById("totalBillPerPerson").value="Bill Per Head "+billPerPerson+" Rs";
    
    
    document.getElementById("TotalOutput").value="TotalBill "+totalBill+" Rs";
        }
}
