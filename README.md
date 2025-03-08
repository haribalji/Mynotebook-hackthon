![Screenshot 2025-03-08 135525](https://github.com/user-attachments/assets/01dfc913-c372-41a5-9bc4-7c19085897e6)# 📝 Mynotebook  Project

📌 Overview 
Mynotebook is a web-based application designed for managing notes, storing photos,
videos, and audio separately for each class, subject, and chapter. Users can easily create,
update, and delete notes with a responsive and user-friendly interface. Additionally, it includes Student Quizzes
for testing knowledgeand an AI Summarizer for quick note summarization.

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

📁 Cloud Storage: Notes and media are stored securely using MongoDB.
- Notes, images, and media files are stored in the cloud.  
- Users can access their notes from any device.  
- Ensures no data loss even if the device is changed.  



🛠️ Installation & Setup--(Run the commands in Terminal)

1) Clone the Repository
   
git clone https://github.com/haribalji/Mynotebook-hackthon.git

>>cd Mynotebook-hackthon


2) Install Dependencies

Backend Setup:

>>cd backend
>>npm install

As we use  Python for AI Summarizer: 

>>pip install -r requirements.txt


Frontend Setup use another terminal :
>>cd Mynotebook-hackthon
>>npm install


3️) Setup Environment Variables:

Create a ".env" file inside the "backend" folder:

>>cd backend
>>touch .env

Then, copy the values from ".env" and fill in your own credentials:

"backend/.env" -->path of the file
GOOGLE_API_KEY=your_google_api_key
PORT=3000
JWT_SECRET=your_jwt_secret
mongoURI=your_mongodb_connection_string


4)Start the Application:

 **Backend**

>>cd backend
>>nodemon index.js


**Frontend**

>>cd Mynotebook-hackthon
>>npm start

5)Open in Browser:

Visit: http://localhost:3000

Troubleshooting:

-->If "npm install" fails, try:
 
>>npm cache clean --force
>>npm install

--> If ".env" variables are missing, verify:

>>cat backend/.env
  


Mynotebook app is ready to go 😊


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


-allowing the user to upload the documents like question paper ,photos and other files
![image](https://github.com/user-attachments/assets/ed58fa88-eaa4-4891-a958-b7a50ec6a7bd)



Security Note:

Do not  push ".env" to GitHub. Ensure it is added to ".gitignore":

>>backend/.env

If ".env" was accidentally committed, remove it:

git rm --cached backend/.env
git commit -m "Removed .env from tracking"
git push origin main




