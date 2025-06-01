document.getElementById('contact-form').addEventListener('submit',async (e)=>{
    e.preventDefault();

    try {
        const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        subject: document.getElementById('subject').value
    }  
    console.log('Sending information',formData);

    const response = await fetch('/api/contact',{
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
    })
    const responseData = await response.json();

    if(response.ok){
        alert("Form submitted successfully");
        document.getElementById('contact-form').reset()
    }else{
        alert("Failed to send message" + responseData.message)
    }
    } catch (error) {
        alert("An error occurred");
        console.log("Error submitting form ",error.message);
    }
});
