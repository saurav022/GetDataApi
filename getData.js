function fetchData()
{
   fetch("https://reqres.in/api/users")
   .then(response => {
      if(!response.ok){
         throw Error("error");
      }
      return response.json();
      
})
   //editing this

.then(metadata=>{
   const getData=metadata.data
   .map(user=>{
      return `
      
      <div class="user">
         <p>FirstName: ${user.first_name}</p>
         <p>LastName: ${user.last_name}</p>
         <p>FullName: ${user.first_name}  ${user.last_name}</p>
         <p>Email:${user.email}</p>
      </div>`;
      
   })
   .join("");
   document.getElementById("app").innerHTML = getData;
   
   //document.querySelector('#app').insertAdjacentHTML("afterbegin", getData);
})
.catch(error=>{
   console.log(error);
});
}
//fetchData();


