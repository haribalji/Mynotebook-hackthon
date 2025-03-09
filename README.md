# 📝 Mynotebook  Project

📌 Overview 
Mynotebook is a web-based application designed for managing notes, storing photos,
videos, and audio separately for each class, subject, and chapter. Users can easily create,
update, and delete notes with a responsive and user-friendly interface. Additionally, it includes Student Quizzes
for testing knowledgeand an AI Summarizer for quick note summarization and providing speech mode for the content  in tamil and english language which also allows the disability people to use our product.

🚀 Features
📂 Organized Note-Taking: Store notes under specific subjects and chapters.
   - Easy CRUD (Create, Read, Update, Delete) operations for managing notes.  

📸 Media Support: Attach photos, videos, and audio to notes.
   - Supports  images, videos, and audio recordings.  

🔑 User Authentication: Secure login using JWT authentication.

💪 Student Quizzes: Interactive quizzes for students to test their knowledge.
   
✅ Checklist Management 
  -Users can create chapter-wise checklists for tracking progress.  
  -Provides a clear study roadmap* to improve productivity.  

🧠 AI Summarizer: AI-powered tool to summarize notes efficiently.
      
   -Auto-summarizes long notes into concise, easy-to-read points.  
   - speech mode for the content is provided in tamil and english language

📁 Cloud Storage: Notes and media are stored securely using MongoDB.
- Notes, images, and media files are stored in the cloud.  
- Users can access their notes from any device.  
- Ensures no data loss even if the device is changed.  



🛠️ Installation & Setup--(Run the commands in Terminal)

1) Clone the Repository
   
git clone https://github.com/haribalji/Mynotebook-hackthon.git

    cd Mynotebook-hackthon


2) Install Dependencies

Backend Setup:

     cd backend
    npm install

As we use  Python for AI Summarizer: 

    pip install -r requirements.txt


For Frontend Setup use another terminal :
    
     cd Mynotebook-hackthon
     npm install


3️) Setup Environment Variables:

Create a ".env" file inside the "backend" folder:

     cd backend
     touch .env

Then, copy the values from ".env" and fill in your own credentials:

"backend/.env" -->path of the file
           
            GOOGLE_API_KEY=your_google_api_key
            PORT=3000
            JWT_SECRET=your_jwt_secret
            mongoURI=your_mongodb_connection_string


4)Start the Application:

 **Backend**

    cd backend
    nodemon index.js


**Frontend**

     cd Mynotebook-hackthon
     npm start

5)Open in Browser:

Visit:http://localhost:3000

Troubleshooting:

-->If "npm install" fails, try:
 
>>      npm cache clean --force
>>      npm install

--> If ".env" variables are missing, verify:

>>      cat backend/.env
  


Mynotebook app is ready to go 😊


-Demo video: https://drive.google.com/file/d/1d8WE7IytVLk58VFxH0YF5t9Hy6MeF7QY/view?usp=sharing






## 📸 Screenshot


-->if the  user is already exists then they can login inside the application

![image](https://github.com/user-attachments/assets/6dcd69ce-f387-4aa8-8be9-be8e75a952ae)



-->if the New User then move to sign page  by clicking the new user button  from the login page 
![image](https://github.com/user-attachments/assets/20f4d26c-5d30-4994-9dd2-cbf2a8de882b)






--Home page

![image](https://github.com/user-attachments/assets/87a6ddab-0684-44f4-92ba-2f17fac36163)


-saved general  notes can be visible:

![Screenshot 2025-03-08 135525](https://github.com/user-attachments/assets/7d39a036-3a1e-473e-a464-b334ad510d1a)

-If the student is a new user to this application then get details of the student 
![image](https://github.com/user-attachments/assets/810ad1b1-d8f4-4db2-a5ef-416521c49573)

-if the student is already a member to this application then for them directly show the subject with respect to their classs 


![image](https://github.com/user-attachments/assets/3dbd78da-c7b7-452d-9c21-9b7d46068989)


- And There all the chapters to that particular subject will be displayed:

  
![image](https://github.com/user-attachments/assets/239fc0cd-e753-4b2c-9573-2f4a60987576)

-if they click any chapter then 
-imporant topic
-allowing the user to add notes with respect to chapter
-make checklist with respect to chapter to track progress

![image](https://github.com/user-attachments/assets/1cbc3d67-02e1-48f0-8212-71763f026287)

Taking notes-
![image](https://github.com/user-attachments/assets/545a81c8-bbc7-4930-ae5d-9c31ae219694)

Adding the checklist-
![image](https://github.com/user-attachments/assets/e4199ba4-3663-477b-a5a8-9e28e3c9e83d)


-allowing the user to upload the documents like question paper ,photos and other files
![image](https://github.com/user-attachments/assets/ed58fa88-eaa4-4891-a958-b7a50ec6a7bd)



-allowing the user to take picture and record voice note

![image](https://github.com/user-attachments/assets/e84dfc7c-a088-480d-9dd8-3146783fe20a)


-Here the user allowed to insert the long content present files in this summarize document 

![image](https://github.com/user-attachments/assets/3f6e820c-d72c-4370-a4e1-23e814808302)

-concise content will produced in both tamil and english:

-the speech mode for the content is provided in tamil and english


![image](https://github.com/user-attachments/assets/cdfd556f-69ea-4d06-b8ec-f10ee26b83ec)

-Quizzess feature created to track 1 mark question  for student 


![image](https://github.com/user-attachments/assets/7e85f5f5-d60c-4212-88e8-ba9068eccf35)






Security Note:

Do not  push ".env" to GitHub. Ensure it is added to ".gitignore":

>>        backend/.env

If ".env" was accidentally committed, remove it:

             git rm --cached backend/.env
             git commit -m "Removed .env from tracking"
             git push origin main




