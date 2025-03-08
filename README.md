# 📝 Mynotebook  Project

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


--Home page

![image](https://github.com/user-attachments/assets/87a6ddab-0684-44f4-92ba-2f17fac36163)







Security Note:

Do not  push ".env" to GitHub. Ensure it is added to ".gitignore":

>>backend/.env

If ".env" was accidentally committed, remove it:

git rm --cached backend/.env
git commit -m "Removed .env from tracking"
git push origin main




