# Web3 - Blockchain Test

🔍 Welcome to the Web3 - Blockchain Test! This project evaluates your ability to integrate MetaMask (or other Web3 wallets) into a Next.js application while ensuring user control over wallet connectivity.

## Objective

The goal is to implement a login page with the following requirements:
- **Automatic Connection:** Initially, the application automatically checks if a Web3 wallet (like MetaMask) is connected and retrieves the user's wallet address.
- **Connect Wallet Button:** Instead of automatic connection, implement a "Connect Wallet" button that users must click to connect their wallet.
- **Disconnect Wallet Button:** Provide a way to disconnect the wallet if it's connected.

## Technologies Used

- **Next.js:** React framework for server-side rendering and frontend.
- **ethers.js:** Library for interacting with Ethereum wallets and smart contracts.

## How to Run the Project

To run this project locally, follow these steps:

### Prerequisites

1. **Node.js:** Make sure Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

2. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

3. Install dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

- Start the Next.js development server:

  ```bash
  npm run dev
  # or
  yarn dev
  ```


## Additional Notes

- This project assumes familiarity with JavaScript/TypeScript, React, and Ethereum/Web3 development.
- Make sure to handle errors gracefully, especially when dealing with asynchronous wallet interactions.

---
🚀 Happy coding! If you encounter any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.