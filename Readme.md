### **1. User Model**
This model represents the users (house hunters) of the platform. It stores information about each user’s profile, subscription status, and activities on the platform.

#### **Key Attributes:**
- **User ID:** Unique identifier for each user.
- **Name/Contact Information:** User’s personal details for communication.
- **Subscription Type:** Tracks whether the user is on the free or premium subscription plan.
- **Subscription Start/End Dates:** Start and end date of the user's subscription.
- **Subscription Payment Status:** Indicates if the user’s subscription is active, expired, or canceled.
- **Search History:** Stores the properties that the user has viewed, saved, or interacted with.
- **Alerts & Notifications:** User preferences for notifications, such as new listings or price changes.

#### **Relationships:**
- **User ↔ Property Interaction**: This is a relationship between the user and the properties they interact with (e.g., viewed, saved, contacted agent, etc.).

---

### **2. Property Model**
This model handles all the data related to the properties listed by agents. It includes both the static information (e.g., location, price) and dynamic data (e.g., interactions from users).

#### **Key Attributes:**
- **Property ID:** Unique identifier for each property.
- **Agent ID:** The agent who listed the property (this will link to the Agent model).
- **Location:** Geographic details such as city, neighborhood, or proximity to amenities.
- **Price & Other Features:** Price, size, amenities, and other relevant property details.
- **Listing Date:** When the property was listed.
- **Property Status:** Whether the property is available, rented, or sold.
- **Images & Media:** Photos, virtual tours, videos, or other media associated with the listing.

#### **Relationships:**
- **Property ↔ Agent**: Every property is listed by an agent.
- **Property ↔ User Interaction**: Users interact with properties in various ways (view, save, contact agent).

---

### **3. Agent Model**
This model tracks agents who list properties on your platform. It will help manage their subscriptions, leads, and payments.

#### **Key Attributes:**
- **Agent ID:** Unique identifier for each agent.
- **Name/Contact Information:** Basic agent details for identification.
- **Subscription Status:** Whether the agent is on a paid or free plan for posting properties.
- **Lead History:** Track the leads generated from each property listing (e.g., users contacting the agent, scheduling a viewing).
- **Payment Status:** Tracks payments made by agents for leads and listings (pay-per-lead or subscription).

#### **Relationships:**
- **Agent ↔ Properties**: Each agent can list multiple properties.
- **Agent ↔ Leads/Interactions**: Agents will have interactions with users (leads).

---

### **4. Lead Model (User-Agent Interaction Model)**
This model tracks the interactions between users and agents. It’s crucial for determining when a user shows interest in a property (e.g., clicking, saving, or contacting the agent). This is the primary model for billing agents based on user interest.

#### **Key Attributes:**
- **Lead ID:** Unique identifier for each lead.
- **User ID:** The user who expressed interest in the property.
- **Property ID:** The property the user is interested in.
- **Action Type:** Type of action the user took (e.g., viewed, saved, contacted agent, scheduled a viewing).
- **Interest Level:** A score or classification based on the action (e.g., viewed, saved = low interest; contacted agent, scheduled viewing = high interest).
- **Lead Timestamp:** Time of the interaction.

#### **Relationships:**
- **Lead ↔ User**: Each lead is tied to a specific user.
- **Lead ↔ Property**: Leads are generated for specific properties.
- **Lead ↔ Agent**: Each lead is associated with an agent’s property.

---

### **5. Payment Model**
This model handles all the financial transactions on the platform. It will track payments made by both users and agents, as well as the payment structure for agents based on leads or subscriptions.

#### **Key Attributes:**
- **Payment ID:** Unique identifier for each payment.
- **User ID (if applicable):** User making the subscription payment (for house hunters).
- **Agent ID (if applicable):** Agent making the lead payment (for agents).
- **Amount Paid:** Amount of money paid for the service (subscription fee or lead fee).
- **Payment Date:** Date and time of the transaction.
- **Payment Status:** Whether the payment was successful, pending, or failed.
- **Payment Method:** The method used for payment (e.g., M-Pesa, credit card, PayPal).
- **Transaction Type:** Whether it's a **subscription payment** (user) or a **lead payment** (agent).

#### **Relationships:**
- **Payment ↔ User**: Links payments to user subscriptions.
- **Payment ↔ Agent**: Links payments to agent lead purchases.

---

### **6. Subscription Plan Model**
This model stores the different subscription plans available for both users and agents, including the features they offer and the associated costs.

#### **Key Attributes:**
- **Plan ID:** Unique identifier for each plan.
- **Plan Type:** Type of subscription (e.g., user or agent).
- **Description:** Brief explanation of the plan (e.g., "Basic User Plan", "Premium Agent Plan").
- **Price:** Monthly or yearly cost of the subscription.
- **Features Included:** Features available in the plan (e.g., number of properties listed, number of leads).
- **Validity:** Duration of the plan (e.g., monthly, yearly).

#### **Relationships:**
- **Subscription Plan ↔ User**: Users are assigned a subscription plan.
- **Subscription Plan ↔ Agent**: Agents can subscribe to different plans.

---

### **7. Notification Model**
This model manages notifications and alerts for both users and agents, keeping them informed about relevant events on the platform, like new listings, lead interactions, and payment reminders.

#### **Key Attributes:**
- **Notification ID:** Unique identifier for each notification.
- **User/Agent ID:** User or agent who will receive the notification.
- **Notification Type:** Type of notification (e.g., new lead, subscription renewal reminder, price drop).
- **Message Content:** The content of the notification (e.g., "A user is interested in your property").
- **Notification Timestamp:** The time when the notification was created.

#### **Relationships:**
- **Notification ↔ User/Agent**: Each notification is linked to either a user or an agent.

---

### **8. Analytics and Reporting Model**
This model is used for reporting and insights. It helps track user activity, lead generation, agent performance, and payment history.

#### **Key Attributes:**
- **Report ID:** Unique identifier for each report.
- **Agent ID (if applicable):** Report generated for a specific agent.
- **User ID (if applicable):** Report generated for a specific user.
- **Lead Data:** Information on lead generation, including total leads per agent, conversion rates, etc.
- **Payment Data:** Information on payments received, outstanding amounts, etc.
- **Engagement Data:** User activity and interactions with properties.

#### **Relationships:**
- **Report ↔ User/Agent**: The report is linked to a specific user or agent for analytics purposes.

---

### **9. Admin Model**
This model provides the platform administrators with access to manage users, agents, properties, payments, and subscriptions.

#### **Key Attributes:**
- **Admin ID:** Unique identifier for each admin.
- **Admin Name:** Admin's name or username.
- **Permissions:** Different levels of access (e.g., super admin, agent manager, user manager).
- **Activity Logs:** A history of actions taken by the admin, such as approving agents, managing subscriptions, etc.

#### **Relationships:**
- **Admin ↔ Users/Agents/Payments:** Admins can interact with all aspects of the platform, managing users, agents, payments, and subscriptions.

---

### **Summary of the Core Models for Your System:**
1. **User Model** – For tracking house hunters' details, subscriptions, and activities.
2. **Property Model** – For storing property listings, prices, locations, and interactions.
3. **Agent Model** – For managing agent details, subscriptions, and lead interactions.
4. **Lead Model** – To track user interactions with properties (clicks, contact requests, saved listings).
5. **Payment Model** – To manage all payment transactions (user subscriptions, agent lead fees).
6. **Subscription Plan Model** – To define and manage available subscription plans for both users and agents.
7. **Notification Model** – For sending alerts and notifications to users and agents.
8. **Analytics and Reporting Model** – For providing insights and performance data to admins and users.
9. **Admin Model** – For administrative access to manage the platform’s operations.
