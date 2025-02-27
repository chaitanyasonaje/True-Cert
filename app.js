// import Tx from ethereumjs-tx
// import Web3 from web3
// import Accounts from web3-eth-accounts
var Tx = require('ethereumjs-tx')
const Web3 = require('web3')
// var Accounts = require('web3-eth-accounts');
const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const web3 = new Web3('HTTP://127.0.0.1:7545');
// var accounts = new Accounts('HTTP://127.0.0.1:7545');

const abi =   [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "instad",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_acr",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_link",
        "type": "string"
      },
      {
        "internalType": "string[]",
        "name": "_course",
        "type": "string[]"
      }
    ],
    "name": "addInstitute",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "instad",
        "type": "address"
      }
    ],
    "name": "viewInstitute",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "acr",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "link",
            "type": "string"
          },
          {
            "internalType": "string[]",
            "name": "course",
            "type": "string[]"
          },
          {
            "internalType": "bool",
            "name": "del",
            "type": "bool"
          }
        ],
        "internalType": "struct cert.institute",
        "name": "i",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "instad",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_acr",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_link",
        "type": "string"
      },
      {
        "internalType": "string[]",
        "name": "_course",
        "type": "string[]"
      }
    ],
    "name": "updateInstitute",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "instad",
        "type": "address"
      }
    ],
    "name": "deleteInstitute",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "viewAllInstitutes",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "acr",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "link",
            "type": "string"
          },
          {
            "internalType": "string[]",
            "name": "course",
            "type": "string[]"
          },
          {
            "internalType": "bool",
            "name": "del",
            "type": "bool"
          }
        ],
        "internalType": "struct cert.institute[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "studad",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "addStudent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "certad",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "instad",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "studad",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_course",
        "type": "string"
      },
      {
        "internalType": "int256",
        "name": "dur",
        "type": "int256"
      }
    ],
    "name": "issueCertificate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "certad",
        "type": "address"
      }
    ],
    "name": "revCertificate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "certad",
        "type": "address"
      }
    ],
    "name": "viewCertificate",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "stud",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "inst",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "course",
            "type": "string"
          },
          {
            "internalType": "int256",
            "name": "duration",
            "type": "int256"
          },
          {
            "internalType": "bool",
            "name": "del",
            "type": "bool"
          }
        ],
        "internalType": "struct cert.certificate",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "studad",
        "type": "address"
      }
    ],
    "name": "viewStudCert",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "stud",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "inst",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "course",
            "type": "string"
          },
          {
            "internalType": "int256",
            "name": "duration",
            "type": "int256"
          },
          {
            "internalType": "bool",
            "name": "del",
            "type": "bool"
          }
        ],
        "internalType": "struct cert.certificate[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]

  const coa =  '0x29452188A83632D8977ac37F7C74554211f904C3';


  var contract = new web3.eth.Contract(abi,coa);


  console.log(contract.methods);

let adminad = "0";
let institutead = null;

// Add address validation helper function
function isValidAddress(address) {
  return web3.utils.isAddress(address);
}

// Add session tracking
const sessions = new Map();

app.get("/",function(req,res){
    res.render("home");
});

app.get("/viewcertificate/:add", async function(req, res) {
  try {
    const accounts = await web3.eth.getAccounts();
    
    // Estimate gas for the call
    const gas = await contract.methods.viewCertificate(req.params.add).estimateGas({
      from: accounts[0]
    });

    console.log("Estimated gas for viewCertificate:", gas);
    
    const result = await contract.methods.viewCertificate(req.params.add).call({
      from: accounts[0],
      gas: Math.min(gas * 2, 6721975) // Double estimated gas with maximum limit
    });

    console.log("Certificate data:", result);
    
    if (!result) {
      console.warn("Certificate not found for address:", req.params.add);
      return res.render("viewcertificate", {
        name: 'N/A',
        course: 'N/A',
        duration: 'N/A',
        institute: 'N/A'
      });
    }

    // Handle potential undefined values
    const certificateData = {
      name: result.stud || 'N/A',
      course: result.course || 'N/A',
      duration: result.duration || 'N/A',
      institute: result.inst || 'N/A'
    };

    console.log("Processed certificate data:", certificateData);
    
    res.render("viewcertificate", certificateData);
  } catch (err) {
    console.error("Error viewing certificate:", {
      error: err.message,
      address: req.params.add,
      stack: err.stack
    });
    
    // Render a default view with error information
    res.render("viewcertificate", {
      name: 'Error',
      course: 'Error fetching certificate',
      duration: 'N/A',
      institute: 'Please try again',
      error: err.message
    });
  }
});

app.post("/",function(req,res){
  var add = req.body.addr;
  res.redirect("/viewcertificate/" + add);
})

app.get("/adminlogin",function(req,res){
    res.render("adminlogin");
});

app.get("/admin/:id",function(req,res){
  var id = req.params.id;
  web3.eth.getAccounts().then(function(result) {
    if(id == result[0])
    {
      adminad = id;
      return res.render("admin",{id: id});
    }
    res.redirect("/");
  });
  
});

app.post("/adminlogin",function(req,res){
  return res.redirect("/admin/" + req.body.address);
});

app.get("/addinstitute",function(req,res){
  res.render("addinstitute",{account:"NULL"});
});

app.post("/addinstitute", async function(req, res) {
  try {
    const courses = ["AI", "BCC"];
    const accounts = await web3.eth.getAccounts();
    const newAccount = await web3.eth.personal.newAccount("password");
    console.log("New account created:", newAccount);

    const gasPrice = await web3.eth.getGasPrice();
    console.log("Current gas price:", gasPrice);

    const result = await contract.methods.addInstitute(newAccount, req.body.name, req.body.acr, req.body.webl, courses)
      .send({
        from: accounts[0],
        gasPrice: gasPrice, // Use dynamic gas price
        gas: 6721975
      });

    console.log("Transaction successful:", result);
    res.render("addinstitute", { account: newAccount });
  } catch (err) {
    console.error("Error adding institute:", err);
    res.render("addinstitute", { account: "Error" });
  }
});

const getInstitutes = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log("Contract address:", coa);
    console.log("Calling from account:", accounts[0]);
    
    const result = await contract.methods.viewAllInstitutes().call({
      from: accounts[0]
    });
    
    console.log("Raw result:", result);
    
    // Check if result is an array and handle accordingly
    if (!Array.isArray(result)) {
      console.error("Unexpected result format:", result);
      return [];
    }
    
    // Process the result assuming it's an array of structs
    return result.map(inst => ({
      name: inst.name || '',
      acr: inst.acr || '',
      link: inst.link || '',
      course: inst.course || [],
      del: inst.del || false
    })).filter(inst => !inst.del);
  } catch (error) {
    console.error("Error in getInstitutes:", error);
    console.error("Stack trace:", error.stack);
    return [];
  }
};

// app.get('/viewinstitute', async (req, res) => {
//   try {
//     const accounts = await web3.eth.getAccounts();
//     console.log("Fetching institutes...");
//     console.log("Contract methods:", Object.keys(contract.methods));
//     console.log("Using account:", accounts[0]);
    
//     const result = await contract.methods.viewAllInstitutes().call({
//       from: accounts[0]
//     });
    
//     console.log("Raw contract response:", result);
    
//     if (!Array.isArray(result)) {
//       console.error("Unexpected result format:", result);
//       return res.render('viewinstitute', { inst: [] });
//     }
    
//     const institutes = result.map(inst => ({
//       name: inst.name || '',
//       acr: inst.acr || '',
//       link: inst.link || '',
//       course: inst.course || [],
//       del: inst.del || false
//     })).filter(inst => !inst.del);
    
//     console.log("Processed institutes:", institutes);
//     res.render('viewinstitute', { inst: institutes });
//   } catch (error) {
//     console.error("Detailed error in viewinstitute:", error);
//     console.error("Error stack:", error.stack);
//     console.error("Contract address:", coa);
//     res.render('viewinstitute', { inst: [] });
//   }
// });
app.get('/viewinstitute', async (req, res) => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log("Fetching institutes...");
    console.log("Contract methods:", Object.keys(contract.methods));
    console.log("Using account:", accounts[0]);

    const result = await contract.methods.viewAllInstitutes().call({
      from: accounts[0]
    });

    console.log("Raw contract response:", result);

    if (!Array.isArray(result)) {
      console.error("Unexpected result format:", result);
      return res.render('viewinstitute', { inst: [] });
    }

    const institutes = result
      .map(inst => ({
        name: inst?.name || '',
        acr: inst?.acr || '',
        link: inst?.link || '',
        course: Array.isArray(inst?.course) ? inst.course : [],
        del: inst?.del || false
      }))
      .filter(inst => !inst.del);

    console.log("Processed institutes:", institutes);
    res.render('viewinstitute', { inst: institutes });

  } catch (error) {
    console.error("Detailed error in viewinstitute:", error);
    console.error("Error stack:", error.stack);
    console.error("Contract address:", contract.options.address); // Fixing undefined `coa`
    
    res.render('viewinstitute', { inst: [] });
  }
});



app.get("/removeinstitute",function(req,res){
  res.render("removeinstitute");
});

app.post("/removeinstitute", async function(req, res) {
  try {
    const accounts = await web3.eth.getAccounts();
    const gasPrice = await web3.eth.getGasPrice();
    console.log("Current gas price:", gasPrice);

    const result = await contract.methods.deleteInstitute(req.body.username)
      .send({
        from: accounts[0],
        gasPrice: gasPrice, // Use dynamic gas price
        gas: 6721975
      });

    console.log("Institute removed:", result);
    res.redirect("/admin/" + adminad);
  } catch (err) {
    console.error("Error removing institute:", err);
    res.redirect("/admin/" + adminad);
  }
});


app.get("/institutelogin",function(req,res){
  res.render("institutelogin");
});

app.get("/institute/:id", function(req, res) {
  const id = req.params.id;
  if (!isValidAddress(id)) {
    console.error("Invalid institute address:", id);
    return res.redirect("/institutelogin");
  }
  
  // Store institute session
  sessions.set('institute', id);
  institutead = id;
  console.log("Institute logged in with address:", institutead);
  res.render("institute", {id: id});
});

app.post("/institutelogin",function(req,res){
  return res.redirect("/institute/" + req.body.username);
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});

app.get("/updateinstitute",function(req,res){
  res.render("updateinstitute");
})

app.post("/updateinstitute", async function(req,res){
  try {
    if (!isValidAddress(institutead)) {
      throw new Error("Invalid institute address");
    }
    console.log("Updating institute with address:", institutead);
    const courses = ["AI","BCC"];
    const gasPrice = await web3.eth.getGasPrice();
    
    await contract.methods.updateInstitute(institutead, req.body.name, req.body.acr, req.body.webl, courses)
      .send({
        from: institutead,
        gasPrice: gasPrice,
        gas: 6721975
      });
    res.render("institute", {id: institutead});
  } catch (err) {
    console.error("Error updating institute:", err);
    res.render("institute", {id: institutead});
  }
});

app.get("/addstudent",function(req,res){
  res.render("addstudent",{account : "NULL"});
});

app.post("/addstudent", async function(req,res){
  try {
    const name = req.body.name;
    const accounts = await web3.eth.getAccounts();
    const hash = await web3.eth.personal.newAccount("password");
    const gasPrice = await web3.eth.getGasPrice();

    await contract.methods.addStudent(hash, name)
      .send({
        from: accounts[0],
        gasPrice: gasPrice,
        gas: 6721975
      });
    res.render("addstudent", {account: hash});
  } catch (err) {
    console.error("Error adding student:", err);
    res.render("addstudent", {account: "Error"});
  }
});

app.get("/gencertificate",function(req,res){
  res.render("gencertificate",{account:"NULL"});
})

app.post("/gencertificate", async function(req,res){
  try {
    const currentInstitute = sessions.get('institute');
    if (!currentInstitute || !isValidAddress(currentInstitute)) {
      return res.render("gencertificate", {account: "Error: Please login as institute first"});
    }

    const accounts = await web3.eth.getAccounts();
    const hash = await web3.eth.personal.newAccount("password");
    const gasPrice = await web3.eth.getGasPrice();

    // Convert duration to integer (remove any non-numeric characters)
    const duration = parseInt(req.body.dur.replace(/[^0-9]/g, ''));
    
    if (isNaN(duration)) {
      throw new Error("Invalid duration format");
    }

    console.log("Generating certificate with:", {
      hash,
      institute: currentInstitute,
      student: req.body.studad,
      course: req.body.course,
      duration: duration // Clean integer value
    });

    await contract.methods.issueCertificate(
      hash,
      currentInstitute,
      req.body.studad,
      req.body.course,
      duration // Clean integer value
    ).send({
      from: accounts[0],
      gasPrice: gasPrice,
      gas: 6721975
    });
    
    res.render("gencertificate", {account: hash});
  } catch (err) {
    console.error("Error generating certificate:", err);
    res.render("gencertificate", {account: "Error: " + err.message});
  }
});

app.get("/remcertificate",function(req,res){
  res.render("remcertificate");
});

app.post("/remcertificate", async function(req,res){
  try {
    const gasPrice = await web3.eth.getGasPrice();
    
    await contract.methods.revCertificate(req.body.addr)
      .send({
        from: institutead,
        gasPrice: gasPrice,
        gas: 6721975
      });
    res.redirect("/institute/" + institutead);
  } catch (error) {
    console.error("Error revoking certificate:", error);
    res.redirect("/institute/" + institutead);
  }
});


app.get("/studentlogin",function(req,res){
  res.render("studentlogin");
});

app.get("/student/:id", async function(req,res){
  try {
    const id = req.params.id;
    const accounts = await web3.eth.getAccounts();
    
    // Add gas estimation
    const gas = await contract.methods.viewStudCert(id).estimateGas({
      from: accounts[0]
    });

    console.log("Estimated gas for viewStudCert:", gas);
    
    const result = await contract.methods.viewStudCert(id).call({
      from: accounts[0],
      gas: Math.min(gas * 2, 6721975) // Double the estimated gas with a maximum limit
    });

    console.log("Student certificates raw result:", result);
    
    // Ensure result is properly formatted
    const certificates = Array.isArray(result) ? result.map(cert => ({
      stud: cert.stud || id,
      inst: cert.inst || 'N/A',
      course: cert.course || 'N/A',
      duration: cert.duration || 'N/A',
      del: cert.del || false
    })).filter(cert => !cert.del) : [];

    console.log("Processed certificates:", certificates);
    
    res.render("student", { 
      id: id, 
      certi: certificates,
      username: id,
      error: null
    });
  } catch (err) {
    console.error("Error viewing student certificates:", {
      error: err.message,
      studentId: req.params.id
    });
    
    res.render("student", { 
      id: req.params.id, 
      certi: [],
      username: req.params.id,
      error: "Failed to fetch certificates. Please try again."
    });
  }
});

app.post("/studentlogin",function(req,res){
  return res.redirect("/student/" + req.body.address);
});


app.get("/test",function(req,res){
  res.render("student");
})

// Add this route to test contract connection
app.get('/test-contract', async (req, res) => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log("Contract address:", coa);
    console.log("Account:", accounts[0]);
    
    // Try to get the contract's bytecode to verify it exists
    const code = await web3.eth.getCode(coa);
    console.log("Contract code exists:", code.length > 2);
    
    // Test a simple view function
    const gas = await contract.methods.viewAllInstitutes().estimateGas({
      from: accounts[0]
    });
    
    console.log("Gas estimate for viewAllInstitutes:", gas);
    
    res.json({
      contractAddress: coa,
      account: accounts[0],
      hasCode: code.length > 2,
      methods: Object.keys(contract.methods),
      gasEstimate: gas
    });
  } catch (error) {
    console.error("Contract test error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Add logout handler to clear session
app.get("/logout", function(req, res) {
  sessions.clear();
  institutead = null;
  res.redirect("/");
});

// Add test route for debugging contract calls
app.get('/test-certificate/:add', async (req, res) => {
  try {
    const accounts = await web3.eth.getAccounts();
    const address = req.params.add;
    
    // Test gas estimation
    const gas = await contract.methods.viewCertificate(address).estimateGas({
      from: accounts[0]
    });
    
    res.json({
      success: true,
      address: address,
      gasEstimate: gas,
      account: accounts[0]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      stack: error.stack
    });
  }
});