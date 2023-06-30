import React from "react"
 import CourseFeatures from "./CourseFeatures";
 import ChoosePlan from "./ChoosePlan";
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
   return(
        <div >
            <h1 className=" bg-red-700"> Learn how to launch a successful podcast</h1>
        <p>Lorem lpsumis simply dummy text of the printing and
            typesetting is ustry.Lorem ipsum has been the
            industry's standard dummy text ever since 1500s
        </p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
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
    array.map((index,value)=>{
       return <ChoosePlan/>
    })
}

</div>

<p class="text-left">
    Review from customers
    </p>
    <div className="flex flex-wrap ">
<ChoosePlan/>
<ChoosePlan/>
<ChoosePlan/>

</div>

        </div>


       


    );
    
};
export default CourseList;
