// product.route.js

const express = require('express');
const app = express();
const productRoutes = express.Router();

// Require Product model in our routes module
let Product = require('../models/Product');
let userInfo = require('../models/userInfo');
let projectInfo = require('../models/projectInfo');
let defectInfo = require('../models/defectInfo');
let actionInfo = require('../models/actionInfo');
let taskInfo = require('../models/taskInfo');
let effortInfo = require('../models/effortInfo');
let highlightInfo = require('../models/highlightInfo');
let financeInfo = require('../models/financeInfo');


// Defined store route
productRoutes.route('/add').post(function (req, res) {
  let product = new Product(req.body);
  product.save()
    .then(product => {
      res.status(200).json({'Product': 'Product has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
productRoutes.route('/').get(function (req, res) {
  /*Product.find(function (err, products){
    if(err){
      console.log(err);
    }
    else {
      res.json(products);
    }
  });*/
  
  Product.find().then((Product)=>{
    res.json({Product});
     }).catch((err)=>{
       res.status(400).send(err);
      });
});

// Defined edit route
productRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Product.findById(id, function (err, product){
      res.json(product);
  });
});


//  Defined update route
productRoutes.route('/update/:id').post(function (req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (!product)
      res.status(404).send("Record not found");
    else {
      product.ProductName = req.body.ProductName;
      product.ProductDescription = req.body.ProductDescription;
      product.ProductPrice = req.body.ProductPrice;

      product.save().then(product => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
productRoutes.route('/delete/:id').get(function (req, res) {
    Product.findByIdAndRemove({_id: req.params.id}, function(err, product){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

productRoutes.route('/addUser').post(function (req, res) {
  //console.log("res",res,"req",req);
  userInfo = new userInfo(req.body);
  //console.log("userInfo",userInfo);
  userInfo.save()
    .then(userInfo => {
      //console.log("res",res);
      res.status(200).json({'status':'200','message': 'Project has been added successfully','statuscode':'200'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


productRoutes.route('/addProject').post(function (req, res) {
  //console.log("res",res,"req",req);
  projectInfo = new projectInfo(req.body);
  //console.log("userInfo",userInfo);
  projectInfo.save()
    .then(projectInfo => {
      //console.log("res",res);
      res.status(200).json({'status':'200','Product': 'Product has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
    
});


productRoutes.route('/addDefect').post(function (req, res) {
 
  defectInfo = new defectInfo(req.body);
  defectInfo.save()
    .then(defectInfo => {
      res.status(200).json({'status':'200','Defect': 'Defect has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });

    
});



/*app.post('/addUser', function(req, res) {
 /* var new_user = new User({
    username: req.username
  });

  new_user.password = new_user.generateHash(userInfo.password);
  new_user.save();*/
  /*userInfo = new userInfo(req.body);
  userInfo.password = userInfo.generateHash(userInfo.password);
  userInfo.save()
  .then(userInfo => {
    //console.log("res",res);
    res.status(200).json({'Product': 'Product has been added successfully'});
  })
  .catch(err => {
  res.status(400).send("unable to save to database");
  });
});*/

productRoutes.route('/login/:userName').get(function (req, res) {
  let userName = req.params.userName;
  userInfo.find({
      "userName": userName
    }, function (err, userInfo){

      res.json(userInfo);
      //console.log(res);
  });
});

// Defined edit route
productRoutes.route('/getProject/:id').get(function (req, res) {
  let empId = req.params.id;
  let query = { "empId": empId };
  //console.log("emp Id", empId);
 /* projectInfo.find(
    query,function (err, projectInfo){
      res.json(projectInfo);
  });
*/

 /*projectInfo.find(query).then((projectInfo)=>{
    res.json(projectInfo);
     }).catch((err)=>{
       res.status(400).send(err);
      });

      let projectId = req.params.id;*/

      projectInfo.find({"empId": empId}).then((projectInfo)=>{
    res.json(projectInfo);
     }).catch((err)=>{
       res.status(400).send(err);
      });
});


// Defined edit Projectroute
productRoutes.route('/editProject/:id').get(function (req, res) {
  let id = req.params.id;
  projectInfo.findById(id, function (err, projectInfo){
      res.json(projectInfo);
  });
});

productRoutes.route('/').get(function (req, res) {
  Product.find(function (err, products){
    if(err){
      console.log(err);
    }
    else {
      res.json(products);
    }
  });
});

productRoutes.route('/updateAction1old').post(function (req, res) {
  //console.log("res",res,"req",req.body);
  /*projectInfo.find({"_id" : req.body._id}, function(err, projectInfo) {
    if (!projectInfo)
      res.status(404).send("Record not found");
    else {
     /* product.ProductName = req.body.ProductName;
      product.ProductDescription = req.body.ProductDescription;
      product.ProductPrice = req.body.ProductPrice;*/
      //actionInfo = new projectInfo(req.body);
      //console.log("res",res,"req",req.body);
     
       // to push in first element
      /* projectInfo['actionInfo']['ActionId'] = req.body.ActionId;
       projectInfo['actionInfo']['actionSteps'] =  req.body.actionSteps;
       projectInfo['actionInfo']['byWhen'] = req.body.byWhen;
       projectInfo['actionInfo']['byWhom'] = req.body.byWhom;
       projectInfo['actionInfo']['status'] = req.body.status;
       projectInfo['actionInfo']['dependencies'] = req.body.dependencies;*/
      // projectInfo._id = req.body._id;
       /*projectInfo.updateOne({ _id:req.body._id }, 
        { $addToSet: { actionInfo: req.body} }, 
          function(err, projectInfo){
                console.log(projectInfo);
        });*/
        projectInfo.findOneAndUpdate({"_id":projectInfo._id}, 
        {$push :{actionInfo:projectInfo.actionInfo},new: true,
        upsert: true },
        function(err, projectInfo){
          
          console.log(projectInfo);
          

        });
    /*projectInfo.save({"_id":projectInfo._id}, {$push :{actionInfo:projectInfo.actionInfo}},function(err, projectInfo) {
      var thisReview;
      if (err) {
          sendJSONresponse(res, 400, err);
      } else {
          updateAverageRating(projectInfo,projectInfo._id);
          // -----------------------------
          thisReview = projectInfo.actionInfo[projectInfo.actionInfo.length - 1];
         // thisReview = book.titles.reviews[book.titles.reviews.length - 1];
          // here also you may have to modify
          sendJSONresponse(res, 201, thisReview);
          res.json('Update complete');
      }
  });*/

      /*projectInfo.updateOne({"_id":req.body._id,"actionInfo":action}).then(projectInfo => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });*/
    //}
  //});
});

// Defined Defecr route
productRoutes.route('/getDefect/:id').get(function (req, res) {
  let projectId = req.params.id;
  /*defectInfo.findById(projectId, function (err, defectInfo){
      res.json(defectInfo);
  });*/
  
 /* defectInfo.find({
      "projectId": projectId
    }, function (err, defectInfo){

      res.json(defectInfo);
      //console.log(res);
  });*/
  defectInfo.find({"projectId": projectId}).then((defectInfo)=>{
    res.json(defectInfo);
     }).catch((err)=>{
       res.status(400).send(err);
      });
  /*defectInfo.find({"projectId": projectId}).then((defectInfo)=>{
    res.json(defectInfo);
     }).catch((err)=>{
       res.status(400).send(err);
      });*/


      /*defectInfo.find({"projectId": projectId}).then((defectInfo)=>{
        res.json(defectInfo);
         }).catch((err)=>{
           res.status(400).send(err);
          });*/
});


productRoutes.route('/addAction').post(function (req, res) {
  actionInfo = new actionInfo(req.body);
   //console.log("userInfo",userInfo);
   actionInfo.save()
     .then(actionInfo => {
       //console.log("res",res);
       res.status(200).json({'status':'200','Action': 'Action has been added successfully'});
     })
     .catch(err => {
     res.status(400).send("unable to save to database");
     });
});


// Defined Defecr route
productRoutes.route('/getAction/:id').get(function (req, res) {
  let projectId = req.params.id;
  
  actionInfo.find({"projectId": projectId}).then((actionInfo)=>{
    res.json(actionInfo);
     }).catch((err)=>{
       res.status(400).send(err);
      });
});


// Defined Defecr route
productRoutes.route('/getTask/:id').get(function (req, res) {
  let projectId = req.params.id;
 
  taskInfo.find({"projectId": projectId}).then((taskInfo)=>{
    res.json(taskInfo);
     }).catch((err)=>{
       res.status(400).send(err);
      });
});

// Defined Defecr route
productRoutes.route('/getEditTask/:id').get(function (req, res) {
  let projectId = req.params.id;
    taskInfo.findById(req.params.id, function(err, taskInfo) {
    
    res.json(taskInfo);
     }).catch((err)=>{
       res.status(400).send(err);
      });
});

productRoutes.route('/addTask').post(function (req, res) {
  // console.log("res",res,"req",req);
  taskInfo = new taskInfo(req.body);
   //console.log("userInfo",userInfo);
   taskInfo.save()
     .then(taskInfo => {
       //console.log("res",res);
       res.status(200).json({'status':'200','Task': 'Task has been updated successfully'});
     })
     .catch(err => {
     res.status(400).send("unable to save to database");
     });
 });


 productRoutes.route('/addEffort').post(function (req, res) {
   console.log("res",res,"req",req);
   effortInfo = new effortInfo(req.body);
   //console.log("userInfo",userInfo);
   effortInfo.save()
     .then(effortInfo => {
       //console.log("res",res);
       res.status(200).json({'status':'200','Effort': 'Effort has been updated successfully'});
     })
     .catch(err => {
     res.status(400).send("unable to save to database");
     });
 });

 
// Defined Effort route
productRoutes.route('/getEffort/:id').get(function (req, res) {
  let projectId = req.params.id;
  
  effortInfo.find({"projectId": projectId}).then((effortInfo)=>{
    res.json(effortInfo);
     }).catch((err)=>{
       res.status(400).send(err);
      });
});

productRoutes.route('/addHighlight').post(function (req, res) {
  // console.log("res",res,"req",req);
  highlightInfo = new highlightInfo(req.body);
   //console.log("userInfo",userInfo);
   highlightInfo.save()
     .then(highlightInfo => {
       //console.log("res",res);
       res.status(200).json({'status':'200','Highlight': 'Highlight has been updated successfully'});
     })
     .catch(err => {
     res.status(400).send("unable to save to database");
     });
 });

 productRoutes.route('/addFinance').post(function (req, res) {
   console.log("req.body",req.body)
  financeInfo = new financeInfo(req.body);
  financeInfo.save()
     .then(financeInfo => {
       res.status(200).json({'status':'200','Finance': 'Finance has been Added successfully'});
     })
     .catch(err => {
     res.status(400).send("unable to save to database");
     });
 });
 
 
// Defined Defecr route
productRoutes.route('/getFinance/:id').get(function (req, res) {
  let projectId = req.params.id;
  
  financeInfo.find({"projectId": projectId}).then((financeInfo)=>{
    res.json(financeInfo);
     }).catch((err)=>{
       res.status(400).send(err);
      });
});
 


// Defined edit route
productRoutes.route('/editProject/:id').get(function (req, res) {
  let id = req.params.id;
  projectInfo.findById(id, function (err, projectInfo){
      res.json(projectInfo);
  });
});



//  Defined update route
productRoutes.route('/updateProject/:id').post(function (req, res) {
  projectInfo.findById(req.params.id, function(err, projectInfo) {
    if (!projectInfo)
      res.status(404).send("Record not found");
    else {
      projectInfo.customerName = req.body.customerName;
      projectInfo.empId = req.body.empId;
      projectInfo.projectEndDate = req.body.projectEndDate;
      projectInfo.projectManager = req.body.projectManager;
      projectInfo.projectName = req.body.projectName;
      projectInfo.projectStartDate = req.body.projectStartDate;
      projectInfo.upin = req.body.upin;
      projectInfo.projectStatus = req.body.projectStatus;
      projectInfo.delivery = req.body.delivery;
      projectInfo.people = req.body.people;
      projectInfo.scope = req.body.scope;
      projectInfo.finance = req.body.finance;
      projectInfo.customer = req.body.customer;

      projectInfo.save().then(projectInfo => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});


productRoutes.route('/updateHighlight/:id').post(function (req, res) {

  highlightInfo.findById(req.params.id, function(err, highlightInfo) {
    
    if (!highlightInfo)
      res.status(404).send("Record not found");
    else {
      highlightInfo.upcomimgKeyActivity = req.body.upcomimgKeyActivity;
      highlightInfo.empId = req.body.empId;
      highlightInfo.projectId = req.body.projectId;
      highlightInfo.importantHighlight = req.body.importantHighlight;
      highlightInfo.keyRisk = req.body.keyRisk;

      highlightInfo.save().then(highlightInfo => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});


// Defined Defecr route
productRoutes.route('/getHighlight/:id').get(function (req, res) {
  let projectId = req.params.id;

  highlightInfo.find({"projectId": projectId}).then((highlightInfo)=>{
    res.json(highlightInfo);
     }).catch((err)=>{
       res.status(400).send(err);
      });
});


productRoutes.route('/updateTask/:id').post(function (req, res) {

  taskInfo.findById(req.params.id, function(err, taskInfo) {
    
    if (!taskInfo)
      res.status(404).send("Record not found");
    else {
      taskInfo.taskName = req.body.taskName;
      taskInfo.empId = req.body.empId;
      taskInfo.projectId = req.body.projectId;
      taskInfo.storyCount = req.body.storyCount;
      taskInfo.startDate = req.body.startDate;
      taskInfo.endDate = req.body.endDate;
      taskInfo.ragStatus = req.body.ragStatus;
      taskInfo.workStatus = req.body.workStatus;

      taskInfo.save().then(taskInfo => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});


productRoutes.route('/updateDefect/:id').post(function (req, res) {

  defectInfo.findById(req.params.id, function(err, defectInfo) {
    
    if (!defectInfo)
      res.status(404).send("Record not found");
    else {
     
      defectInfo.empId = req.body.empId;
      defectInfo.projectId = req.body.projectId;

      defectInfo.raisedLastSit = req.body.raisedLastSit;
      defectInfo.raisedLastUat = req.body.raisedLastUat;
      defectInfo.raisedLastComments = req.body.raisedLastComments;

      defectInfo.closedLastSit = req.body.closedLastSit;
      defectInfo.closedLastUat = req.body.closedLastUat;
      defectInfo.closedLastComments = req.body.closedLastComments;

      defectInfo.totRaisedSit = req.body.totRaisedSit;
      defectInfo.totRaisedUat = req.body.totRaisedUat;
      defectInfo.totRaisedComments = req.body.totRaisedComments;

      defectInfo.totCloseSit = req.body.totCloseSit;
      defectInfo.totCloseUat = req.body.totCloseUat;
      defectInfo.totCloseComments = req.body.totCloseComments;

      defectInfo.nettSit = req.body.nettSit;
      defectInfo.nettUat = req.body.nettUat;
      defectInfo.nettComments = req.body.nettComments;

      defectInfo.save().then(defectInfo => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});


productRoutes.route('/getEditAction/:id').get(function (req, res) {
  let projectId = req.params.id;
    actionInfo.findById(req.params.id, function(err, actionInfo) {
    
    res.json(actionInfo);
     }).catch((err)=>{
       res.status(400).send(err);
      });
});


productRoutes.route('/updateAction/:id').post(function (req, res) {

  actionInfo.findById(req.params.id, function(err, actionInfo) {
    
    if (!actionInfo)
      res.status(404).send("Record not found");
    else {
      actionInfo.actionSteps = req.body.actionSteps;
      actionInfo.empId = req.body.empId;
      actionInfo.projectId = req.body.projectId;
      actionInfo.byWhom = req.body.byWhom;
      actionInfo.byWhen = req.body.byWhen;
      actionInfo.actionStatus = req.body.actionStatus;
      actionInfo.dependencies = req.body.dependencies;

      actionInfo.save().then(actionInfo => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});


productRoutes.route('/getEditEffort/:id').get(function (req, res) {
  let projectId = req.params.id;
  effortInfo.findById(req.params.id, function(err, effortInfo) {
    
    res.json(effortInfo);
     }).catch((err)=>{
       res.status(400).send(err);
      });
});


productRoutes.route('/updateEffort/:id').post(function (req, res) {

  effortInfo.findById(req.params.id, function(err, effortInfo) {
    
    if (!effortInfo)
      res.status(404).send("Record not found");
    else {
      effortInfo.atRep = req.body.atRep;
      effortInfo.empId = req.body.empId;
      effortInfo.projectId = req.body.projectId;
      effortInfo.atPo = req.body.atPo;
      effortInfo.perManday = req.body.perManday;
      effortInfo.resource = req.body.resource;

      effortInfo.save().then(effortInfo => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});


productRoutes.route('/getEditFinance/:id').get(function (req, res) {
  let projectId = req.params.id;
  financeInfo.findById(req.params.id, function(err, financeInfo) {
    
    res.json(financeInfo);
     }).catch((err)=>{
       res.status(400).send(err);
      });
});


productRoutes.route('/updateFinance/:id').post(function (req, res) {

  financeInfo.findById(req.params.id, function(err, financeInfo) {
    
    if (!financeInfo)
      res.status(404).send("Record not found");
    else {
      financeInfo.travelCost = req.body.travelCost;
      financeInfo.empId = req.body.empId;
      financeInfo.projectId = req.body.projectId;
      financeInfo.itCost = req.body.itCost;
      financeInfo.marginCost = req.body.marginCost;
      financeInfo.marginPercent = req.body.marginPercent;
      financeInfo.salaryCost = req.body.salaryCost;
      financeInfo.others = req.body.others;
      financeInfo.revenue = req.body.revenue;
      financeInfo.riskProjection = req.body.riskProjection;
      financeInfo.totalCost = req.body.totalCost;
      financeInfo.analysis = req.body.analysis;

      financeInfo.save().then(financeInfo => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});


// Defined delete | remove | destroy route
productRoutes.route('/deleteTask/:id').get(function (req, res) {
  taskInfo.findByIdAndRemove({_id: req.params.id}, function(err, taskInfo){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});


// Defined delete | remove | destroy route
productRoutes.route('/deleteProject/:id').get(function (req, res) {
  projectInfo.findByIdAndRemove({_id: req.params.id}, function(err, projectInfo){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});


// Defined delete | remove | destroy route
productRoutes.route('/deleteAction/:id').get(function (req, res) {
  actionInfo.findByIdAndRemove({_id: req.params.id}, function(err, actionInfo){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});


// Defined delete | remove | destroy route
productRoutes.route('/deleteDefect/:id').get(function (req, res) {
  defectInfo.findByIdAndRemove({_id: req.params.id}, function(err, defectInfo){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});


// Defined delete | remove | destroy route
productRoutes.route('/deleteHighlight/:id').get(function (req, res) {
  highlightInfo.findByIdAndRemove({_id: req.params.id}, function(err, highlightInfo){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});


// Defined delete | remove | destroy route
productRoutes.route('/deleteEffort/:id').get(function (req, res) {
  effortInfo.findByIdAndRemove({_id: req.params.id}, function(err, effortInfo){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});

// Defined delete | remove | destroy route
productRoutes.route('/deleteFinance/:id').get(function (req, res) {
  financeInfo.findByIdAndRemove({_id: req.params.id}, function(err, financeInfo){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});




productRoutes.route('/getProjectID/:id').get(function (req, res) {
  projectInfo.findById(req.params.id, function(err, projectInfo) {
    
    res.json(projectInfo);
     }).catch((err)=>{
       res.status(400).send(err);
      });
});

productRoutes.route('/getEditDefect/:id').get(function (req, res) {
  let projectId = req.params.id;
  defectInfo.find({"projectId": projectId}).then((defectInfo)=>{
    res.json(defectInfo);
     }).catch((err)=>{
       res.status(400).send(err);
      });
});


module.exports = productRoutes;
