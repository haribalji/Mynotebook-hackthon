

// insertchapter.js
const mongoose = require("mongoose");
const Chapter = require("../models/Chapter");

const mongoURI = process.env.mongoURI;//here the db url  of your own need to be present

const insertChapters = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await Chapter.deleteMany(); // Clear existing data
        const chaptersData = [
            // Class 1
            
            { class: 1, subject: "Tamil", chapters: ["அகர வரிசை", "எழுத்துக்கள்", "சொற்கள்", "வாக்கியங்கள்"] },
            { class: 1, subject: "English", chapters: ["Alphabet", "Basic Words", "Simple Sentences"] },
            { class: 1, subject: "Mathematics", chapters: ["Numbers", "Addition & Subtraction", "Shapes"] },
            { class: 1, subject: "Environmental Studies", chapters: ["My Body", "Family", "Animals", "Plants"] },
            { class: 1, subject: "Computer Science", chapters: ["Introduction to Computers", "Parts of a Computer", "Basic Computer Operations"] },
        
            // Class 2
          
            { class: 2, subject: "Tamil", chapters: ["அகர வரிசை", "எழுத்துக்கள்", "சொற்கள்", "வாக்கியங்கள்"] },
            { class: 2, subject: "English", chapters: ["Alphabet", "Basic Words", "Simple Sentences"] },
            { class: 2, subject: "Mathematics", chapters: ["Numbers", "Addition & Subtraction", "Multiplication", "Shapes"] },
            { class: 2, subject: "Science", chapters: ["Living Things", "Non-living Things", "Plants", "Animals"] },
            { class: 2, subject: "Social Science", chapters: ["My Neighborhood", "Community Helpers", "Seasons", "Festivals"] },
        
            // Class 3
          
            { class: 3, subject: "Tamil", chapters: ["எழுத்துக்கள்", "சொற்கள்", "வாக்கியங்கள்", "பாடல்கள்"] },
            { class: 3, subject: "English", chapters: ["Alphabet", "Words and Sentences", "Short Stories", "Grammar Basics"] },
            { class: 3, subject: "Mathematics", chapters: ["Numbers", "Addition and Subtraction", "Multiplication and Division", "Shapes and Patterns", "Time and Money"] },
            { class: 3, subject: "Science", chapters: ["Living and Non-living Things", "Animals and Their Homes", "Plants and Their Uses", "The Human Body", "Our Environment"] },
            { class: 3, subject: "Social Science", chapters: ["My Family and Relatives", "Neighborhood and Helpers", "Festivals and Celebrations", "Transport and Communication", "Our Earth"] },
        
            // Class 4
           { class: 4, subject: "Tamil", chapters: ["இலக்கணம்", "பாடல்கள்", "சொற்கள்", "வாக்கியங்கள்"] },
            { class: 4, subject: "English", chapters: ["Stories", "Grammar", "Poems", "Prose"] },
            { class: 4, subject: "Mathematics", chapters: ["Numbers and Operations", "Multiplication and Division", "Fractions", "Time and Calendar", "Measurement"] },
            { class: 4, subject: "Science", chapters: ["Our Universe", "Plant Life", "Animal Life", "Human Body", "Weather and Seasons"] },
            { class: 4, subject: "Social Science", chapters: ["My Country", "States and Capitals", "Great Leaders", "Our Festivals", "Means of Transport"] },
        
            // Class 5

            { class: 5, subject: "Tamil", chapters: ["கவிதைகள்", "கதைகள்", "நாடகம்", "தமிழ் இலக்கியம்"] },
            { class: 5, subject: "English", chapters: ["Prose", "Poetry", "Grammar", "Reading Comprehension"] },
            { class: 5, subject: "Mathematics", chapters: ["Numbers", "Fractions", "Geometry", "Measurements"] },
            { class: 5, subject: "Science", chapters: ["Human Body", "Plants and Animals", "Force and Energy", "Air and Water"] },
            { class: 5, subject: "Social Science", chapters: ["Indian History", "Geography", "Civics", "Our Nation"] },
        
            // Class 6
          
            { class: 6, subject: "Tamil", chapters: ["சிறுகதைகள்", "கவிதைகள்", "நாடகம்", "தமிழர் பண்பாடு"] },
            { class: 6, subject: "English", chapters: ["Prose", "Poetry", "Grammar", "Reading Skills"] },
            { class: 6, subject: "Mathematics", chapters: ["Whole Numbers", "Decimals", "Geometry", "Data Handling"] },
            { class: 6, subject: "Science", chapters: ["Food and Nutrition", "Living Organisms", "Force and Motion", "Electricity"] },
            { class: 6, subject: "Social Science", chapters: ["History of India", "Geography of the World", "Civics and Government", "Indian Culture"] },

        
            // Class 7
       
            { class: 7, subject: "Tamil", chapters: ["அகநானூறு", "புறநானூறு", "சொற்களின் வகைகள்", "வாக்கிய அமைப்பு"] },
            { class: 7, subject: "English", chapters: ["Prose", "Poetry", "Grammar", "Comprehension"] },
            { class: 7, subject: "Mathematics", chapters: ["Algebra", "Geometry", "Fractions and Decimals", "Data Handling"] },
            { class: 7, subject: "Science", chapters: ["Heat", "Light", "Respiration", "Nutrition in Plants and Animals"] },
            { class: 7, subject: "Social Science", chapters: ["History of India", "Civics", "Geography", "Economics"] },
        
            // Class 8
      

            { class: 8, subject: "Tamil", chapters: ["இலக்கணம்", "சொற்களின் பயிற்சி"] },
            { class: 8, subject: "English", chapters: ["Prose", "Poetry"] },
            { class: 8, subject: "Mathematics", chapters: ["Statistics", "Probability"] },
            { class: 8, subject: "Science", chapters: ["Cell Structure", "Reproduction in Animals"] },
            { class: 8, subject: "Social Science", chapters: ["National Movements", "Economic Development"] },
        
            // Class 9
          

            { class: 9, subject: "Tamil", chapters: ["இலக்கணம்", "சிறுகதை"] },
            { class: 9, subject: "English", chapters: ["Prose", "Poetry", "Grammar"] },
            { class: 9, subject: "Mathematics", chapters: ["Algebra", "Geometry", "Trigonometry"] },
            { class: 9, subject: "Science", chapters: ["Laws of Motion", "Atoms and Molecules", "Tissues"] },
            { class: 9, subject: "Social Science", chapters: ["French Revolution", "Industrial Revolution", "Indian National Movement"] },
        
            // Class 10
         
            { class: 10, subject: "Tamil", chapters: ["இலக்கியம்", "கவிதைகள்", "சிறுகதை"] },
            { class: 10, subject: "English", chapters: ["Prose", "Poetry", "Supplementary"] },
            { class: 10, subject: "Mathematics", chapters: ["Algebra", "Geometry", "Trigonometry", "Statistics"] },
            { class: 10, subject: "Science", chapters: ["Electricity", "Magnetism", "Chemical Reactions", "Reproduction"] },
            { class: 10, subject: "Social Science", chapters: ["Indian Freedom Struggle", "World War II", "Indian Constitution", "Economics"] },
        
            // Class 11
           
            { class: 11, subject: "Tamil", chapters: ["இலக்கணம்", "கவிதைகள்", "சிறுகதை"] },
            { class: 11, subject: "English", chapters: ["Prose", "Poetry", "Supplementary"] },
            { class: 11, subject: "Mathematics", chapters: ["Sets", "Relations & Functions", "Trigonometric Functions", "Probability"] },
            { class: 11, subject: "Physics", chapters: ["Units & Measurements", "Motion in a Straight Line", "Work, Energy & Power"] },
            { class: 11, subject: "Chemistry", chapters: ["Some Basic Concepts of Chemistry", "Structure of Atom", "Chemical Bonding"] },
            { class: 11, subject: "Biology", chapters: ["Cell Structure", "Plant Physiology", "Human Physiology"] },
            { class: 11, subject: "Computer Science", chapters: ["Introduction to Programming", "Data Structures", "Algorithms"] },
            { class: 11, subject: "Commerce", chapters: ["Business Environment", "Forms of Business Organization", "Emerging Modes of Business"] },
            { class: 11, subject: "Economics", chapters: ["Introduction to Microeconomics", "Demand and Supply", "National Income Accounting"] },
            
        
            // Class 12
            { class: 12, subject: "Tamil", chapters: ["நவீன தமிழ்க் கவிதைகள்"] },
            { class: 12, subject: "English", chapters: ["Prose & Drama", "Creative Writing"] },
            { class: 12, subject: "Mathematics", chapters: ["Differentiation", "Probability"] },
            { class: 12, subject: "Physics", chapters: ["Electromagnetism", "Semiconductors"] },
            { class: 12, subject: "Chemistry", chapters: ["Organic Chemistry", "Electrochemistry"] },
            { class: 12, subject: "Biology", chapters: ["Human Reproduction", "Biotechnology"] },
            { class: 12, subject: "Computer Science", chapters: ["Java Basics", "Data Structures"] },
            { class: 12, subject: "Commerce", chapters: ["Financial Management", "Taxation"] }
        ];
        
        await Chapter.insertMany(chaptersData);
        console.log("Chapters inserted successfully!");
        mongoose.connection.close();
    } catch (error) {
        console.error("Error inserting chapters:", error);
        mongoose.connection.close();
    }
};

insertChapters();




