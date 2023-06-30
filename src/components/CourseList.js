import React from "react"
 import CourseFeatures from "./CourseFeatures";
 import ChoosePlan from "./ChoosePlan";
 import ReviewCustomers from "./ReviewCustomers"
const CourseList = () =>{

    const array=[
        
        {
            title:"Interactive Features",
            Description:"Lorem lpsumis simply dummy text of the printing and typesetting is ustry.Lorem ipsum has been the industry's standard dummy text ever since 1500s"
        
            },
        {
            title:"Interactive Features",
            Description:"Lorem lpsumis simply dummy text of the printing and typesetting is ustry.Lorem ipsum has been the industry's standard dummy text ever since 1500s"
        
        },
        {
            title:"Interactive Features",
            Description:"Lorem lpsumis simply dummy text of the printing and typesetting is ustry.Lorem ipsum has been the industry's standard dummy text ever since 1500s"
        
        },
        {
            title:"Interactive Features",
            Description:"Lorem lpsumis simply dummy text of the printing and typesetting is ustry.Lorem ipsum has been the industry's standard dummy text ever since 1500s"
        }

        
    ]
    const arraylist=[
        {
            title:"Basicplan",
            Description:"Lorem lpsumis simply dummy text of the printing and typesetting"
        },
        {
            title:"Premiumplan",
            Description:"Lorem lpsumis simply dummy text of the printing and typesetting"
        },
        {
            
                title:"Basicplan",
                Description:"Lorem lpsumis simply dummy text of the printing and typesetting"
            
        }
    ]
    const list=[
        {
            title:"lolla smith",
            Description:"Lorem lpsumis simply dummy text of the printing andtypesetting is ustry.Lorem ipsum has been theindustry's standard dummy text ever since 1500s"
        },
        {
            title:"lolla smith",
            Description:"Lorem lpsumis simply dummy text of the printing andtypesetting is ustry.Lorem ipsum has been theindustry's standard dummy text ever since 1500s"
        },
        {
        title:"lolla smith",
        Description:"Lorem lpsumis simply dummy text of the printing andtypesetting is ustry.Lorem ipsum has been theindustry's standard dummy text ever since 1500s"
        }
    ]
return(
        <div >
            <h1 className="text-left md:text-center font-extrabold	"> Learn how to launch a successful podcast</h1>
        <p className="text-left md:text-center">Lorem lpsumis simply dummy text of the printing and 
            typesetting is ustry.Lorem ipsum has been the
            industry's standard dummy text ever since 1500s
        </p>
        <button class="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded ">
  Signup
</button>
<div className="flex flex-wrap ">
{
    array.map((index,value)=>{
       return <CourseFeatures/>
    })
}

</div>
<p class="text-left md:text-center">
    Choose your plan
    </p>
    <div className="flex flex-wrap ">
{
    arraylist.map((index,value)=>{
       return <ChoosePlan/>
    
    })
}

</div>

<p class="text-left">
    Review from customers
    </p>
    <div className="flex flex-wrap ">
    {
    list.map((index,value)=>{
       return <ReviewCustomers/>
    })
}


</div>

        </div>
);
    
};
export default CourseList;
