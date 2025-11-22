# 💳 Perlora – Financial Management 

<p align="center">
  <img src="path_to_your_image/finance_module.png" width="350">
</p>

The **Financial Management module** of Perlora ( Sri Lanka Travel Agency Management System ) is a comprehensive payment system designed to handle all monetary transactions in a travel management platform efficiently, securely, and transparently. It connects travelers, service providers, and administrators in a seamless environment where payments for hotels, transportation, and events are processed with real-time updates, detailed transaction tracking, and robust security measures.  

This process ensures ease of use, reliability, and transparency, making the travel experience smooth for users while giving administrators full control over financial operations. It also incorporates **user and bill models** to ensure that payments are linked properly and cannot function independently, providing detailed billing, transaction tracking, and user-specific data handling.

---

## 🚀 Features

### 1. Multi-Method Payment Processing
- Users can select **Credit Card** or **Bank Transaction**.  
- For credit cards, users must enter card details.  
- **Card Type Detection:**  
  - Card number starting with `44` → Visa  
  - Card number starting with `55` → Mastercard  
- Handles real-time transactions with immediate status updates.  
- Automatically links payments to **bookings, events, or transport reservations**.  
- Ensures smooth checkout flow for travelers with minimal steps.

### 2. CRUD Operations for Payment Records
- **Create:** Add new payment transactions securely.  
- **Read:** View all transactions with details like amount, date, service type, and status.  
- **Update:** Modify credit card details **if payment is not completed**.  
- **Delete:** Remove records when necessary, ensuring database integrity.  

### 3. Transaction History & Reports
- Maintains complete logs of all financial activities.  
- Provides filtering and sorting by date, service, or status.  
- Admins can generate financial reports for auditing and accounting.  
- Users can view **their personal transaction history** for transparency.  

### 4. Integration with Travel Services
- Payments are linked to **hotels, transportation, and events**.  
- Automatically updates booking status upon successful payment.  
- Reduces errors and discrepancies between services and payments.  

### 5. User Dashboard
- Interactive, user-friendly dashboard for travelers and admins.  
- Visualizes payment summaries, status updates, and analytics.  
- Provides detailed breakdowns of each transaction.  
- Only confirmed payments allow **receipt download**.  
- Users can **edit pending credit card payments** before confirmation.  

### 6. User & Bill Model Integration
- Payments cannot function independently; they are linked with **User** and **Bill** models.  
- **User-specific payment endpoints** ensure that users see only their own transactions.  
- Bills are generated for every confirmed payment, storing all relevant payment details.  
- **Session management** is required to fetch the **current user's ID** during payment processing.

### 7. Security & Compliance
- Implements data validation, encryption, and secure API calls.  
- Follows best practices for payment gateway integration.  
- Protects sensitive information like credit card details and transaction data.  
- Reduces fraud and enhances user trust.  

### 8. Notifications & Alerts
- Sends real-time notifications for successful, pending, or failed payments.  
- Alerts admins of unusual activity or payment failures.  
- Improves user engagement and operational efficiency.

---

## 🛠️ Tech Stack
- **Frontend:** React.js – responsive and interactive user interfaces  
- **Backend:** Node.js with Express.js – RESTful APIs for secure, scalable communication  
- **Database:** MongoDB – stores **User, Payment, and Bill records**  
- **Payment Gateways:** PayPal, Stripe, QR payments – integrated for seamless digital transactions  
- **Tools:** Postman (API testing), VS Code, Git/GitHub, Figma (UI/UX Design)  

---

## 📋 Methodology

### Research & Analysis
- Studied existing travel platforms with integrated payment systems.  
- Identified common challenges like failed transactions, security issues, and poor UX.  
- Gathered requirements for both travelers and admins to ensure usability.

### System Design
- Designed database schema linking **payments with bookings, transport, events, users, and bills**.  
- Created RESTful API endpoints for CRUD operations and user-specific payment access.  
- Designed secure payment workflow including validation and error handling, with **card type detection**.

### Implementation
- Developed frontend interfaces for dashboards, transaction history, and payment forms.  
- Integrated multiple payment gateways for flexibility.  
- Connected backend APIs with frontend using React components and state management.  
- Enabled **pending credit card editing** before confirmation.  

### Testing
- Conducted unit testing for API endpoints.  
- Performed integration testing with payment gateways.  
- Ensured data security and smooth user experience across all modules.  

---

## 🎨 Design Method
- Complete UI/UX design using **Figma**, with interactive prototypes.  
- Focused on clarity, simplicity, and user flow to minimize errors during payment.  
- Designed dashboard analytics to give both travelers and admins meaningful insights.  
- Visual branding aligned with Perlora’s theme for consistency across the platform.  

---

## 🔄 Workflow Diagram
1. Traveler selects service → hotel, transport, or event.  
2. Traveler initiates payment → chooses preferred gateway (Credit Card / Bank Transaction).  
3. Payment processing:  
   - If Credit Card: enter details → card type auto-detected → pending payment editable  
   - If Bank Transaction: payment initiated  
4. Payment validated via gateway → status updated in MongoDB.  
5. Bill generated for confirmed payments.  
6. Notification sent → traveler & admin receive updates.  
7. Dashboard updated → users view own transactions; admins view all transactions.  
8. Receipt available **only after confirmed payment**.  

*(Add an actual flowchart image here if available.)*

---

## 📌 Roadmap / Future Enhancements
- Integration with **local banks and e-wallets** for Sri Lankan users.  
- AI-powered **fraud detection** for suspicious transactions.  
- Advanced **financial analytics dashboard** with graphs and trends.  
- Recurring payments and **automatic booking renewals**.  
- In-app **invoice generation** and export to PDF/Excel.  

---

## ⚙️ Installation & Setup

Follow these steps to run the Perlora Travel Agency Management System locally:

### 1. Extract the Project
- Download and extract the project ZIP file to your desired location.



### 2. Open Terminals
- Open your terminal and **split it into two terminals** (or open two separate terminals).  
- One terminal will be used for the **frontend**, and the other for the **backend/server**.

### 3. Install Dependencies
- In the **frontend terminal**, navigate to the `frontend` folder and install the necessary packages:
`cd frontend
npm install`

---

## 🌐 Demo
https://drive.google.com/file/d/1RehC16TWnS-5nMs-0oDj7eeCzUP47LM1/view

---

## 👩🏻‍💻 Author
Developed by **[Aisha_Nafy](https://www.linkedin.com/in/aisha-nafy/)**   
Undergraduate Information Technology Student | SLIIT  

---

