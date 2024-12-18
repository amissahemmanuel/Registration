
async function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  
   const title = document.getElementById("title").value;
   const name = document.getElementById("name").value.trim();
   const gender = document.getElementById("gender").value;
   const dateofbirth = document.getElementById("dateofbirth").value.trim();
   const email = document.getElementById("email").value.trim();
   const phonenumber = document.getElementById("phonenumber").value.trim();
   const whatsapp = document.getElementById("whatsapp").value.trim();
   const address = document.getElementById("address").value;

   if(!title){
     alert("Please select a title");
     return false;
   }
  if(!name){
     alert("Please enter your full name");
     return false;
   }
   if(!gender){
     alert("Please select your gender");
     return false;
   }
   if(!dateofbirth){
     alert("Please choose your date of birth");
     return false;
   }
   if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
     alert("Please enter a valid email address.");
     return false;
   }
   if (!/^\d{10,15}$/.test(phonenumber)) {
     alert("Please enter a valid phone number.");
     return false;
   }
  
   if (whatsapp && !/^\d{10,15}$/.test(whatsapp)) {
   alert("Please enter a valid WhatsApp number.");
   return false;
 }

  
   if(!address){
     alert("Please enter your address");
     return false;
   }

  
  doc.text("Registration Details", 10, 20);
  doc.text(`Title: ${title}`, 10, 30);
  doc.text(`Name: ${name}`, 10, 40);
  doc.text(`Date of Birth: ${dateofbirth}`, 10, 50);
  doc.text(`Email: ${email}`, 10, 60);
  doc.text(`Phone Number: ${phonenumber}`, 10, 70);
  doc.text(`WhatsApp: ${whatsapp}`, 10, 80);
  doc.text(`Address: ${address}`, 10, 90);

  
  doc.save("registration_form.pdf");
}
