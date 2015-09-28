module.exports = {
  bind : function (app, assetPath) {
    app.get('/', function (req, res) {

      res.render('index',
                {'assetPath' : assetPath});

    });

      app.get('/scenarios', function (req, res) {
      res.render('scenarios',
                {'assetPath' : assetPath});

    });

       app.get('/launch', function (req, res) {
      res.render('launch',
                {'assetPath' : assetPath});

    });

       app.get('/examples', function (req, res) {
      res.render('examples',
                {'assetPath' : assetPath});

    });

//CSOP annual return Scenario 1
    app.get('/start_scenario1', function (req, res) {
      res.render('start_scenario1',
                {'assetPath' : assetPath});

    });
    
    app.get('/what_scenario1_2', function (req, res) {
      res.render('what_scenario1_2',
                {'assetPath' : assetPath});

    });
    
    app.get('/group_scenario1_3', function (req, res) {
      res.render('group_scenario1_3',
                {'assetPath' : assetPath});

    });

        app.get('/group_company_scenario1_4', function (req, res) {
      res.render('group_company_scenario1_4',
                {'assetPath' : assetPath});

    });

               app.get('/group_company_edit_scenario1_5', function (req, res) {
      res.render('group_company_edit_scenario1_5',
                {'assetPath' : assetPath});

    });
       
                   app.get('/alterations_scenario1_6', function (req, res) {
      res.render('alterations_scenario1_6',
                {'assetPath' : assetPath});

    });

    app.get('/alterations_check_scenario1_7', function (req, res) {
      res.render('alterations_check_scenario1_7',
                {'assetPath' : assetPath});
       
         });

    
    app.get('/summary_scenario1_8', function (req, res) {
      res.render('summary_scenario1_8',
                {'assetPath' : assetPath});
       
         });

     app.get('/confirmation_scenario1_9', function (req, res) {
      res.render('confirmation_scenario1_9',
                {'assetPath' : assetPath});
       
         });
        app.get('/summary_scenario1_8_details', function (req, res) {
      res.render('summary_scenario1_8_details',
                {'assetPath' : assetPath});
       
         });

  //Scenario 2
  app.get('/start_scenario2', function (req, res) {
      res.render('start_scenario2',
                {'assetPath' : assetPath});

    });
    app.get('/what_scenario2_2', function (req, res) {
      res.render('what_scenario2_2',
                {'assetPath' : assetPath});

    });

    app.get('/check_scenario2_3', function (req, res) {
      res.render('check_scenario2_3',
                {'assetPath' : assetPath});

    });

 

           app.get('/errors_scenario2_4', function (req, res) {
      res.render('errors_scenario2_4',
                {'assetPath' : assetPath});

    });

       app.get('/scenario2_5_Errors_CSOP', function (req, res) {
      res.render('scenario2_5_Errors_CSOP',
                {'assetPath' : assetPath});

    });

        //Scenario 3

        app.get('/start_scenario3', function (req, res) {
      res.render('start_scenario3',
                {'assetPath' : assetPath});

    });


        app.get('/what_scenario3_2', function (req, res) {
      res.render('what_scenario3_2',
                {'assetPath' : assetPath});

    });

                app.get('/check_scenario3_3', function (req, res) {
      res.render('check_scenario3_3',
                {'assetPath' : assetPath});

    });
                app.get('/no_errors_scenario3_4', function (req, res) {
      res.render('no_errors_scenario3_4',
                {'assetPath' : assetPath});

    });

     app.get('/group_scenario3_5', function (req, res) {
      res.render('group_scenario3_5',
                {'assetPath' : assetPath});

    });

        app.get('/group_company_scenario3_6', function (req, res) {
      res.render('group_company_scenario3_6',
                {'assetPath' : assetPath});

    });

               app.get('/group_company_edit_scenario3_7', function (req, res) {
      res.render('group_company_edit_scenario3_7',
                {'assetPath' : assetPath});

    });
       
                   app.get('/alterations_scenario3_8', function (req, res) {
      res.render('alterations_scenario3_8',
                {'assetPath' : assetPath});

    });

    app.get('/alterations_check_scenario3_9', function (req, res) {
      res.render('alterations_check_scenario3_9',
                {'assetPath' : assetPath});
       
         });

    
    app.get('/summary_scenario3_10', function (req, res) {
      res.render('summary_scenario3_10',
                {'assetPath' : assetPath});
       
         });

     app.get('/confirmation_scenario3_11', function (req, res) {
      res.render('confirmation_scenario3_11',
                {'assetPath' : assetPath});

       });

     //Checking Service Scenario 1

        app.get('/checking_service/checking_start_scenario1', function (req, res) {
      res.render('checking_service/checking_start_scenario1',
                {'assetPath' : assetPath});

       });
    
  app.get('/checking_service/select_scheme_scenario1_2', function (req, res) {
      res.render('checking_service/select_scheme_scenario1_2',
                {'assetPath' : assetPath});

       });

    app.get('/checking_service/checking_scenario1_3', function (req, res) {
      res.render('checking_service/checking_scenario1_3',
                {'assetPath' : assetPath});

       });

        app.get('/checking_service/errors_scenario1_4', function (req, res) {
      res.render('checking_service/errors_scenario1_4',
                {'assetPath' : assetPath});   

                 });
        
          app.get('/checking_service/errors_scenario1_5', function (req, res) {
      res.render('checking_service/errors_scenario1_5',
                {'assetPath' : assetPath});   

                 });

      // Checking Scenario 2

   
               app.get('/checking_service/checking_start_scenario2', function (req, res) {
      res.render('checking_service/checking_start_scenario2',
                {'assetPath' : assetPath});

       });

       app.get('/checking_service/select_scheme_scenario2_2', function (req, res) {
      res.render('checking_service/select_scheme_scenario2_2',
                {'assetPath' : assetPath});

       });

        app.get('/checking_service/checking_scenario2_3', function (req, res) {
      res.render('checking_service/checking_scenario2_3',
                {'assetPath' : assetPath});

       });

       app.get('/checking_service/confirmation_scenario2_4', function (req, res) {
      res.render('checking_service/confirmation_scenario2_4',
                {'assetPath' : assetPath});

       });

                 app.get('/checking_service/error_webpage', function (req, res) {
      res.render('checking_service/error_webpage',
                {'assetPath' : assetPath});

       });

                 // Checking Scenario 3

   
               app.get('/checking_service/checking_start_scenario3', function (req, res) {
      res.render('checking_service/checking_start_scenario3',
                {'assetPath' : assetPath});

       });
                           app.get('/checking_service/templates', function (req, res) {
      res.render('checking_service/templates',
                {'assetPath' : assetPath});

       });

      app.get('/checking_service/what_scenario3_2_test', function (req, res) {
      res.render('checking_service/what_scenario3_2_test',
                {'assetPath' : assetPath});

       });
      
      app.get('/checking_service/checking_scenario3_3', function (req, res) {
      res.render('checking_service/checking_scenario3_3',
                {'assetPath' : assetPath});

       });

// Checking Multiple

   
               app.get('/checking_service/checking_multiple1a', function (req, res) {
      res.render('checking_service/checking_multiple1a',
                {'assetPath' : assetPath});

       });

                            app.get('/checking_service/checking_multiple1', function (req, res) {
      res.render('checking_service/checking_multiple1',
                {'assetPath' : assetPath});

       });
            
            app.get('/checking_service/checking_multiple2', function (req, res) {
      res.render('checking_service/checking_multiple2',
                {'assetPath' : assetPath});

       });

             app.get('/checking_service/errors_multiple', function (req, res) {
      res.render('checking_service/errors_multiple',
                {'assetPath' : assetPath});

       });

                   app.get('/checking_service/checking_multiple3', function (req, res) {
      res.render('checking_service/checking_multiple3',
                {'assetPath' : assetPath});

       });


       app.get('/checking_service/checking_multiple4', function (req, res) {
      res.render('checking_service/checking_multiple4',
                {'assetPath' : assetPath});

       });

           app.get('/checking_service/checking_multiple5', function (req, res) {
      res.render('checking_service/checking_multiple5',
                {'assetPath' : assetPath});

       });

                 app.get('/checking_service/checking_multiple6', function (req, res) {
      res.render('checking_service/checking_multiple6',
                {'assetPath' : assetPath});

       });


                 // user testing
     
       app.get('/user_testing/user_testing', function (req, res) {
      res.render('user_testing/user_testing',
                {'assetPath' : assetPath});

    });

app.get('/user_testing/logout1', function (req, res) {
      res.render('user_testing/logout1',
                {'assetPath' : assetPath});

    });

  app.get('/user_testing/logout1_2', function (req, res) {
      res.render('user_testing/logout1_2',
                {'assetPath' : assetPath});

    });
      app.get('/user_testing/logout1_3', function (req, res) {
      res.render('user_testing/logout1_3',
                {'assetPath' : assetPath});

    });
      app.get('/user_testing/logout1_4', function (req, res) {
      res.render('user_testing/logout1_4',
                {'assetPath' : assetPath});

    });

      app.get('/user_testing/logout1_4_2', function (req, res) {
      res.render('user_testing/logout1_4_2',
                {'assetPath' : assetPath});

    });

      app.get('/user_testing/logout1_4_3', function (req, res) {
      res.render('user_testing/logout1_4_3',
                {'assetPath' : assetPath});

    });

      app.get('/user_testing/logout1_4_4', function (req, res) {
      res.render('user_testing/logout1_4_4',
                {'assetPath' : assetPath});

    });


      app.get('/user_testing/logout1_5', function (req, res) {
      res.render('user_testing/logout1_5',
                {'assetPath' : assetPath});

    });

    app.get('/user_testing/checking_start_logout', function (req, res) {
      res.render('user_testing/checking_start_logout',
                {'assetPath' : assetPath});

    });



     app.get('/confirmation_declaration_test', function (req, res) {
      res.render('confirmation_declaration_test',
                {'assetPath' : assetPath});

    });

        app.get('/alterations_declaration_test', function (req, res) {
      res.render('alterations_declaration_test',
                {'assetPath' : assetPath});

    });

// SIP End of Year Return Scenario 1
       app.get('/SIP/scenario1_0_Start_SIP', function (req, res) {
      res.render('SIP/scenario1_0_Start_SIP',
                {'assetPath' : assetPath});

    });

              app.get('/SIP/scenario1_1_What_SIP', function (req, res) {
      res.render('SIP/scenario1_1_What_SIP',
                {'assetPath' : assetPath});

    });


                      app.get('/SIP/scenario1_14_csv_ods_SIP', function (req, res) {
      res.render('SIP/scenario1_14_csv_ods_SIP',
                {'assetPath' : assetPath});

    });

                       app.get('/SIP/scenario1_15_ods_SIP', function (req, res) {
      res.render('SIP/scenario1_15_ods_SIP',
                {'assetPath' : assetPath});

    });

                       app.get('/SIP/scenario1_16_group_company_summary', function (req, res) {
      res.render('SIP/scenario1_16_group_company_summary',
                {'assetPath' : assetPath});

    });



                       


                      



              

              app.get('/SIP/scenario1_12_manual_csv_SIP', function (req, res) {
      res.render('SIP/scenario1_12_manual_csv_SIP',
                {'assetPath' : assetPath});

    });


              app.get('/SIP/scenario1_13_company_details_SIP', function (req, res) {
      res.render('SIP/scenario1_13_company_details_SIP',
                {'assetPath' : assetPath});

    });



             

              app.get('/SIP/test', function (req, res) {
      res.render('SIP/test',
                {'assetPath' : assetPath});

    });

                          app.get('/SIP/scenario1_2_Group_SIP', function (req, res) {
      res.render('SIP/scenario1_2_Group_SIP',
                {'assetPath' : assetPath});

    });

          app.get('/SIP/scenario1_3_Group_Details_SIP', function (req, res) {
      res.render('SIP/scenario1_3_Group_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP/scenario1_4_Group_Edit_SIP', function (req, res) {
      res.render('SIP/scenario1_4_Group_Edit_SIP',
                {'assetPath' : assetPath});

    });

         
             app.get('/SIP/scenario1_5_Trustee_Details_SIP', function (req, res) {
      res.render('SIP/scenario1_5_Trustee_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP/scenario1_6_Trustee_Edit_SIP', function (req, res) {
      res.render('SIP/scenario1_6_Trustee_Edit_SIP',
                {'assetPath' : assetPath});

    });

app.get('/SIP/scenario1_7_Alterations_SIP', function (req, res) {
      res.render('SIP/scenario1_7_Alterations_SIP',
                {'assetPath' : assetPath});

    });      

                app.get('/SIP/scenario1_8_Alterations_Check_SIP', function (req, res) {
      res.render('SIP/scenario1_8_Alterations_Check_SIP',
                {'assetPath' : assetPath});

    }); 

                app.get('/SIP/scenario1_9_Summary_SIP', function (req, res) {
      res.render('SIP/scenario1_9_Summary_SIP',
                {'assetPath' : assetPath});

    }); 


             app.get('/SIP/scenario1_10_Confirmation_SIP', function (req, res) {
      res.render('SIP/scenario1_10_Confirmation_SIP',
                {'assetPath' : assetPath});

    }); 


// SIP End of Year Return Scenario 2

       app.get('/SIP/scenario2_0_Start_SIP', function (req, res) {
      res.render('SIP/scenario2_0_Start_SIP',
                {'assetPath' : assetPath});

    });

              app.get('/SIP/scenario2_1_What_SIP', function (req, res) {
      res.render('SIP/scenario2_1_What_SIP',
                {'assetPath' : assetPath});

    });

               app.get('/SIP/scenario2_2_Check_SIP', function (req, res) {
      res.render('SIP/scenario2_2_Check_SIP',
                {'assetPath' : assetPath});

    });

                 app.get('/SIP/scenario2_3_Errors_SIP', function (req, res) {
      res.render('SIP/scenario2_3_Errors_SIP',
                {'assetPath' : assetPath});

    });

  app.get('/SIP/scenario2_4_Errors_SIP', function (req, res) {
      res.render('SIP/scenario2_4_Errors_SIP',
                {'assetPath' : assetPath});

    });


   

// SIP End of Year Return Scenario 3

       app.get('/SIP/scenario3_0_Start_SIP', function (req, res) {
      res.render('SIP/scenario3_0_Start_SIP',
                {'assetPath' : assetPath});

    });

       app.get('/SIP/scenario1_11_company_SIP', function (req, res) {
      res.render('SIP/scenario1_11_company_SIP',
                {'assetPath' : assetPath});

    });

              app.get('/SIP/scenario3_1_What_SIP', function (req, res) {
      res.render('SIP/scenario3_1_What_SIP',
                {'assetPath' : assetPath});

    });

          app.get('/SIP/scenario3_2_Check_SIP', function (req, res) {
      res.render('SIP/scenario3_2_Check_SIP',
                {'assetPath' : assetPath});

    });

   app.get('/SIP/scenario3_3_Group_SIP', function (req, res) {
      res.render('SIP/scenario3_3_Group_SIP',
                {'assetPath' : assetPath});

    });

          app.get('/SIP/scenario3_4_Group_Details_SIP', function (req, res) {
      res.render('SIP/scenario3_4_Group_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP/scenario3_5_Group_Edit_SIP', function (req, res) {
      res.render('SIP/scenario3_5_Group_Edit_SIP',
                {'assetPath' : assetPath});

    });

         
             app.get('/SIP/scenario3_6_Trustee_Details_SIP', function (req, res) {
      res.render('SIP/scenario3_6_Trustee_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP/scenario3_7_Trustee_Edit_SIP', function (req, res) {
      res.render('SIP/scenario3_7_Trustee_Edit_SIP',
                {'assetPath' : assetPath});

    });

app.get('/SIP/scenario3_8_Alterations_SIP', function (req, res) {
      res.render('SIP/scenario3_8_Alterations_SIP',
                {'assetPath' : assetPath});

    });      

                app.get('/SIP/scenario3_9_Alterations_Check_SIP', function (req, res) {
      res.render('SIP/scenario3_9_Alterations_Check_SIP',
                {'assetPath' : assetPath});

    }); 

                app.get('/SIP/scenario3_10_Summary_SIP', function (req, res) {
      res.render('SIP/scenario3_10_Summary_SIP',
                {'assetPath' : assetPath});

    }); 


             app.get('/SIP/scenario3_11_Confirmation_SIP', function (req, res) {
      res.render('SIP/scenario3_11_Confirmation_SIP',
                {'assetPath' : assetPath});

    }); 


app.get('/SIP/scenario1_17_upload_CSV', function (req, res) {
      res.render('SIP/scenario1_17_upload_CSV',
                {'assetPath' : assetPath});

    }); 









    // SAYE End of Year Return Scenario 1

       app.get('/SAYE/scenario1_0_Start_SAYE', function (req, res) {
      res.render('SAYE/scenario1_0_Start_SAYE',
                {'assetPath' : assetPath});

    });

              app.get('/SAYE/scenario1_14_csv_ods_SAYE', function (req, res) {
      res.render('SAYE/scenario1_14_csv_ods_SAYE',
                {'assetPath' : assetPath});

    });


              app.get('/SAYE/scenario1_18_upload_SAYE_CSV', function (req, res) {
      res.render('SAYE/scenario1_18_upload_SAYE_CSV',
                {'assetPath' : assetPath});

    });

              app.get('/SAYE/scenario1_15_ods_SAYE', function (req, res) {
      res.render('SAYE/scenario1_15_ods_SAYE',
                {'assetPath' : assetPath});

    });


app.get('/SAYE/scenario1_1_What_SAYE', function (req, res) {
      res.render('SAYE/scenario1_1_What_SAYE',
                {'assetPath' : assetPath});

    });


                          app.get('/SAYE/scenario1_2_Group_SAYE', function (req, res) {
      res.render('SAYE/scenario1_2_Group_SAYE',
                {'assetPath' : assetPath});

    });

          app.get('/SAYE/scenario1_3_Group_Details_SAYE', function (req, res) {
      res.render('SAYE/scenario1_3_Group_Details_SAYE',
                {'assetPath' : assetPath});

    });

            app.get('/SAYE/scenario1_4_Group_Edit_SAYE', function (req, res) {
      res.render('SAYE/scenario1_4_Group_Edit_SAYE',
                {'assetPath' : assetPath});

    });

         app.get('/SAYE/scenario1_5_Alterations_SAYE', function (req, res) {
      res.render('SAYE/scenario1_5_Alterations_SAYE',
                {'assetPath' : assetPath});

    });      

                app.get('/SAYE/scenario1_6_Alterations_Check_SAYE', function (req, res) {
      res.render('SAYE/scenario1_6_Alterations_Check_SAYE',
                {'assetPath' : assetPath});

    }); 

                app.get('/SAYE/scenario1_7_Summary_SAYE', function (req, res) {
      res.render('SAYE/scenario1_7_Summary_SAYE',
                {'assetPath' : assetPath});

    }); 



app.get('/SAYE/scenario2_5_Errors_SAYE', function (req, res) {
      res.render('SAYE/scenario2_5_Errors_SAYE',
                {'assetPath' : assetPath});

    }); 

app.get('/SAYE/SAYE_errors_scenario2_5', function (req, res) {
      res.render('SAYE/SAYE_errors_scenario2_5',
                {'assetPath' : assetPath});

    }); 
             



             app.get('/SAYE/scenario1_8_Confirmation_SAYE', function (req, res) {
      res.render('SAYE/scenario1_8_Confirmation_SAYE',
                {'assetPath' : assetPath});

    }); 


// SAYE End of Year Return Scenario 2

       app.get('/SAYE/scenario2_0_Start_SAYE', function (req, res) {
      res.render('SAYE/scenario2_0_Start_SAYE',
                {'assetPath' : assetPath});

    });

              app.get('/SAYE/scenario2_1_What_SAYE', function (req, res) {
      res.render('SAYE/scenario2_1_What_SAYE',
                {'assetPath' : assetPath});

    });

               app.get('/SAYE/scenario2_2_Check_SAYE', function (req, res) {
      res.render('SAYE/scenario2_2_Check_SAYE',
                {'assetPath' : assetPath});

    });

                 app.get('/SAYE/scenario2_3_Errors_SAYE', function (req, res) {
      res.render('SAYE/scenario2_3_Errors_SAYE',
                {'assetPath' : assetPath});

    });

  app.get('/SAYE/scenario2_4_Errors_SAYE', function (req, res) {
      res.render('SAYE/scenario2_4_Errors_SAYE',
                {'assetPath' : assetPath});

    });


   

// SAYE End of Year Return Scenario 3

       app.get('/SAYE/scenario3_0_Start_SAYE', function (req, res) {
      res.render('SAYE/scenario3_0_Start_SAYE',
                {'assetPath' : assetPath});

    });

              app.get('/SAYE/scenario3_1_What_SAYE', function (req, res) {
      res.render('SAYE/scenario3_1_What_SAYE',
                {'assetPath' : assetPath});

    });

          app.get('/SAYE/scenario3_2_Check_SAYE', function (req, res) {
      res.render('SAYE/scenario3_2_Check_SAYE',
                {'assetPath' : assetPath});

    });

   app.get('/SAYE/scenario3_3_Group_SAYE', function (req, res) {
      res.render('SAYE/scenario3_3_Group_SAYE',
                {'assetPath' : assetPath});

    });

          app.get('/SAYE/scenario3_4_Group_Details_SAYE', function (req, res) {
      res.render('SAYE/scenario3_4_Group_Details_SAYE',
                {'assetPath' : assetPath});

    });

            app.get('/SAYE/scenario3_5_Group_Edit_SAYE', function (req, res) {
      res.render('SAYE/scenario3_5_Group_Edit_SAYE',
                {'assetPath' : assetPath});

    });

         
             app.get('/SAYE/scenario3_6_Alterations_SAYE', function (req, res) {
      res.render('SAYE/scenario3_6_Alterations_SAYE',
                {'assetPath' : assetPath});

    });

            app.get('/SAYE/scenario3_7_Alterations_Check_SAYE', function (req, res) {
      res.render('SAYE/scenario3_7_Alterations_Check_SAYE',
                {'assetPath' : assetPath});

    });

app.get('/SAYE/scenario3_8_Summary_SAYE', function (req, res) {
      res.render('SAYE/scenario3_8_Summary_SAYE',
                {'assetPath' : assetPath});

    });      

                app.get('/SAYE/scenario3_9_Confirmation_SAYE', function (req, res) {
      res.render('SAYE/scenario3_9_Confirmation_SAYE',
                {'assetPath' : assetPath});

    }); 


 // OTHER End of Year Return Scenario 1
       app.get('/OTHER/scenario1_0_Start_OTHER', function (req, res) {
      res.render('OTHER/scenario1_0_Start_OTHER',
                {'assetPath' : assetPath});

    });



 app.get('/OTHER/scenario1_20_OTHER_company_single_summary', function (req, res) {
      res.render('OTHER/scenario1_20_OTHER_company_single_summary',
                {'assetPath' : assetPath});

    });





 app.get('/OTHER/scenario1_9_Summary_OTHER', function (req, res) {
      res.render('OTHER/scenario1_9_Summary_OTHER',
                {'assetPath' : assetPath});

    });


app.get('/OTHER/scenario1_10_Confirmation_OTHER', function (req, res) {
      res.render('OTHER/scenario1_10_Confirmation_OTHER',
                {'assetPath' : assetPath});

    });




              app.get('/OTHER/scenario1_1_What_OTHER', function (req, res) {
      res.render('OTHER/scenario1_1_What_OTHER',
                {'assetPath' : assetPath});

    });

                          app.get('/OTHER/scenario1_2_Group_OTHER', function (req, res) {
      res.render('OTHER/scenario1_2_Group_OTHER',
                {'assetPath' : assetPath});

    });

          app.get('/OTHER/scenario1_3_Group_Details_OTHER', function (req, res) {
      res.render('OTHER/scenario1_3_Group_Details_OTHER',
                {'assetPath' : assetPath});

    });

            app.get('/OTHER/scenario1_4_Group_Edit_OTHER', function (req, res) {
      res.render('OTHER/scenario1_4_Group_Edit_OTHER',
                {'assetPath' : assetPath});

    });

    

                app.get('/OTHER/scenario1_5_Summary_OTHER', function (req, res) {
      res.render('OTHER/scenario1_5_Summary_OTHER',
                {'assetPath' : assetPath});

    }); 


             app.get('/OTHER/scenario1_6_Confirmation_OTHER', function (req, res) {
      res.render('OTHER/scenario1_6_Confirmation_OTHER',
                {'assetPath' : assetPath});

    }); 


// OTHER End of Year Return Scenario 2

       app.get('/OTHER/scenario2_0_Start_OTHER', function (req, res) {
      res.render('OTHER/scenario2_0_Start_OTHER',
                {'assetPath' : assetPath});

    });

              app.get('/OTHER/scenario2_1_What_OTHER', function (req, res) {
      res.render('OTHER/scenario2_1_What_OTHER',
                {'assetPath' : assetPath});

    });

               app.get('/OTHER/scenario2_2_Check_OTHER', function (req, res) {
      res.render('OTHER/scenario2_2_Check_OTHER',
                {'assetPath' : assetPath});

    });

                 app.get('/OTHER/scenario2_3_Errors_OTHER', function (req, res) {
      res.render('OTHER/scenario2_3_Errors_OTHER',
                {'assetPath' : assetPath});

    });

  app.get('/OTHER/scenario2_4_Errors_OTHER', function (req, res) {
      res.render('OTHER/scenario2_4_Errors_OTHER',
                {'assetPath' : assetPath});

    });


   

// OTHER End of Year Return Scenario 3

       app.get('/OTHER/scenario3_0_Start_OTHER', function (req, res) {
      res.render('OTHER/scenario3_0_Start_OTHER',
                {'assetPath' : assetPath});

    });

              app.get('/OTHER/scenario3_1_What_OTHER', function (req, res) {
      res.render('OTHER/scenario3_1_What_OTHER',
                {'assetPath' : assetPath});

    });

          app.get('/OTHER/scenario3_2_Check_OTHER', function (req, res) {
      res.render('OTHER/scenario3_2_Check_OTHER',
                {'assetPath' : assetPath});

    });

   app.get('/OTHER/scenario3_3_Group_OTHER', function (req, res) {
      res.render('OTHER/scenario3_3_Group_OTHER',
                {'assetPath' : assetPath});

    });

          app.get('/OTHER/scenario3_4_Group_Details_OTHER', function (req, res) {
      res.render('OTHER/scenario3_4_Group_Details_OTHER',
                {'assetPath' : assetPath});

    });

            app.get('/OTHER/scenario3_5_Group_Edit_OTHER', function (req, res) {
      res.render('OTHER/scenario3_5_Group_Edit_OTHER',
                {'assetPath' : assetPath});

    });

         


app.get('/OTHER/scenario3_6_Summary_OTHER', function (req, res) {
      res.render('OTHER/scenario3_6_Summary_OTHER',
                {'assetPath' : assetPath});

    });      

                app.get('/OTHER/scenario3_7_Confirmation_OTHER', function (req, res) {
      res.render('OTHER/scenario3_7_Confirmation_OTHER',
                {'assetPath' : assetPath});

    }); 


  // EMI End of Year Return Scenario 1
  
       app.get('/EMI/scenario1_0_Start_EMI', function (req, res) {
      res.render('EMI/scenario1_0_Start_EMI',
                {'assetPath' : assetPath});

    });

              app.get('/EMI/scenario1_1_What_EMI', function (req, res) {
      res.render('EMI/scenario1_1_What_EMI',
                {'assetPath' : assetPath});

    });

                          app.get('/EMI/scenario1_2_Group_EMI', function (req, res) {
      res.render('EMI/scenario1_2_Group_EMI',
                {'assetPath' : assetPath});

    });

          app.get('/EMI/scenario1_3_Group_Details_EMI', function (req, res) {
      res.render('EMI/scenario1_3_Group_Details_EMI',
                {'assetPath' : assetPath});

    });

            app.get('/EMI/scenario1_4_Group_Edit_EMI', function (req, res) {
      res.render('EMI/scenario1_4_Group_Edit_EMI',
                {'assetPath' : assetPath});

    });

    

                app.get('/EMI/scenario1_5_Summary_EMI', function (req, res) {
      res.render('EMI/scenario1_5_Summary_EMI',
                {'assetPath' : assetPath});

    }); 


             app.get('/EMI/scenario1_6_Confirmation_EMI', function (req, res) {
      res.render('EMI/scenario1_6_Confirmation_EMI',
                {'assetPath' : assetPath});

    }); 


// EMI End of Year Return Scenario 2

       app.get('/EMI/scenario2_0_Start_EMI', function (req, res) {
      res.render('EMI/scenario2_0_Start_EMI',
                {'assetPath' : assetPath});

    });

              app.get('/EMI/scenario2_1_What_EMI', function (req, res) {
      res.render('EMI/scenario2_1_What_EMI',
                {'assetPath' : assetPath});

    });

               app.get('/EMI/scenario2_2_Check_EMI', function (req, res) {
      res.render('EMI/scenario2_2_Check_EMI',
                {'assetPath' : assetPath});

    });

                 app.get('/EMI/scenario2_3_Errors_EMI', function (req, res) {
      res.render('EMI/scenario2_3_Errors_EMI',
                {'assetPath' : assetPath});

    });

  app.get('/EMI/scenario2_4_Errors_EMI', function (req, res) {
      res.render('EMI/scenario2_4_Errors_EMI',
                {'assetPath' : assetPath});

    });


   

// EMI End of Year Return Scenario 3

       app.get('/EMI/scenario3_0_Start_EMI', function (req, res) {
      res.render('EMI/scenario3_0_Start_EMI',
                {'assetPath' : assetPath});

    });

              app.get('/EMI/scenario3_1_What_EMI', function (req, res) {
      res.render('EMI/scenario3_1_What_EMI',
                {'assetPath' : assetPath});

    });

          app.get('/EMI/scenario3_2_Check_EMI', function (req, res) {
      res.render('EMI/scenario3_2_Check_EMI',
                {'assetPath' : assetPath});

    });

   app.get('/EMI/scenario3_3_Group_EMI', function (req, res) {
      res.render('EMI/scenario3_3_Group_EMI',
                {'assetPath' : assetPath});

    });

          app.get('/EMI/scenario3_4_Group_Details_EMI', function (req, res) {
      res.render('EMI/scenario3_4_Group_Details_EMI',
                {'assetPath' : assetPath});

    });

            app.get('/EMI/scenario3_5_Group_Edit_EMI', function (req, res) {
      res.render('EMI/scenario3_5_Group_Edit_EMI',
                {'assetPath' : assetPath});

    });

         


app.get('/EMI/scenario3_6_Summary_EMI', function (req, res) {
      res.render('EMI/scenario3_6_Summary_EMI',
                {'assetPath' : assetPath});

    });      

                app.get('/EMI/scenario3_7_Confirmation_EMI', function (req, res) {
      res.render('EMI/scenario3_7_Confirmation_EMI',
                {'assetPath' : assetPath});

    }); 

//TCR
                             app.get('/TCR/main_page', function (req, res) {
      res.render('TCR/main_page',
                {'assetPath' : assetPath});

    }); 


                       app.get('/TCR/notifications', function (req, res) {
      res.render('TCR/notifications',
                {'assetPath' : assetPath});

    }); 
                  app.get('/TCR/children', function (req, res) {
      res.render('TCR/children',
                {'assetPath' : assetPath});

    }); 

       app.get('/TCR/income', function (req, res) {
      res.render('TCR/income',
                {'assetPath' : assetPath});

    });

                                app.get('/TCR/children_amended', function (req, res) {
      res.render('TCR/children_amended',
                {'assetPath' : assetPath});

    }); 

                             app.get('/TCR/summary', function (req, res) {
      res.render('TCR/summary',
                {'assetPath' : assetPath});

    }); 

 app.get('/TCR/summary_simple', function (req, res) {
      res.render('TCR/summary_simple',
                {'assetPath' : assetPath});

    });

     app.get('/TCR/new_child', function (req, res) {
      res.render('TCR/new_child',
                {'assetPath' : assetPath});

    }); 
  
  app.get('/TCR/new_child_summary', function (req, res) {
      res.render('TCR/new_child_summary',
                {'assetPath' : assetPath});

    }); 

  app.get('/TCR/main_pagev2', function (req, res) {
      res.render('TCR/main_pagev2',
                {'assetPath' : assetPath});

    }); 

  app.get('/TCR/main_pagev3', function (req, res) {
      res.render('TCR/main_pagev3',
                {'assetPath' : assetPath});

    }); 
 
 app.get('/TCR/main_pagev4', function (req, res) {
      res.render('TCR/main_pagev4',
                {'assetPath' : assetPath});

    }); 

 app.get('/TCR/childrenv4', function (req, res) {
      res.render('TCR/childrenv4',
                {'assetPath' : assetPath});

    }); 

 app.get('/TCR/new_childv4', function (req, res) {
      res.render('TCR/new_childv4',
                {'assetPath' : assetPath});

    }); 

 app.get('/TCR/new_child_summaryv4', function (req, res) {
      res.render('TCR/new_child_summaryv4',
                {'assetPath' : assetPath});

    }); 

  app.get('/TCR/main_pagev4_amended', function (req, res) {
      res.render('TCR/main_pagev4_amended',
                {'assetPath' : assetPath});

    }); 

   app.get('/TCR/summary_simplev4', function (req, res) {
      res.render('TCR/summary_simplev4',
                {'assetPath' : assetPath});

    });

    app.get('/TCR/main_pagev5', function (req, res) {
      res.render('TCR/main_pagev5',
                {'assetPath' : assetPath});

    }); 

 app.get('/TCR/childrenv5', function (req, res) {
      res.render('TCR/childrenv5',
                {'assetPath' : assetPath});

    }); 

 app.get('/TCR/new_childv5', function (req, res) {
      res.render('TCR/new_childv5',
                {'assetPath' : assetPath});

    }); 

 app.get('/TCR/new_child_summaryv5', function (req, res) {
      res.render('TCR/new_child_summaryv5',
                {'assetPath' : assetPath});

    }); 

  app.get('/TCR/another_change', function (req, res) {
      res.render('TCR/another_change',
                {'assetPath' : assetPath});

    }); 

   app.get('/TCR/summary_simplev4', function (req, res) {
      res.render('TCR/summary_simplev4',
                {'assetPath' : assetPath});

    });

      app.get('/TCR/main_pagev6', function (req, res) {
      res.render('TCR/main_pagev6',
                {'assetPath' : assetPath});

    });

      app.get('/TCR/childrenv6', function (req, res) {
      res.render('TCR/childrenv6',
                {'assetPath' : assetPath});

    });

         app.get('/TCR/main_pagev7', function (req, res) {
      res.render('TCR/main_pagev7',
                {'assetPath' : assetPath});

    });

    app.get('/TCR/childrenv7', function (req, res) {
      res.render('TCR/childrenv7',
                {'assetPath' : assetPath});

    });

        app.get('/TCR/personal_detailsv7', function (req, res) {
      res.render('TCR/personal_detailsv7',
                {'assetPath' : assetPath});

    });

        //Group plan

               app.get('/group_plan/minimal', function (req, res) {
      res.render('group_plan/minimal',
                {'assetPath' : assetPath});

    }); 

               app.get('/group_plan/minimal2', function (req, res) {
      res.render('group_plan/minimal2',
                {'assetPath' : assetPath});

    }); 
                         app.get('/group_plan/minimalv2_pages', function (req, res) {
      res.render('group_plan/minimalv2_pages',
                {'assetPath' : assetPath});

    }); 

          app.get('/group_plan/minimalv2_pages2', function (req, res) {
      res.render('group_plan/minimalv2_pages2',
                {'assetPath' : assetPath});

    }); 

                   app.get('/group_plan/crn', function (req, res) {
      res.render('group_plan/crn',
                {'assetPath' : assetPath});

    }); 

                                      app.get('/group_plan/crn2', function (req, res) {
      res.render('group_plan/crn2',
                {'assetPath' : assetPath});

    }); 

                                     app.get('/group_plan/postcode', function (req, res) {
      res.render('group_plan/postcode',
                {'assetPath' : assetPath});

    }); 
                                     app.get('/group_plan/postcode2', function (req, res) {
      res.render('group_plan/postcode2',
                {'assetPath' : assetPath});

    }); 
               app.get('/group_plan/minimalv3', function (req, res) {
      res.render('group_plan/minimalv3',
                {'assetPath' : assetPath});

    }); 

                app.get('/user_testing/user_testing2', function (req, res) {
      res.render('user_testing/user_testing2',
                {'assetPath' : assetPath});

    }); 

                app.get('/user_testing/user_testing3', function (req, res) {
      res.render('user_testing/user_testing3',
                {'assetPath' : assetPath});

    }); 


                app.get('/user_testing/user_testing4', function (req, res) {
      res.render('user_testing/user_testing4',
                {'assetPath' : assetPath});

    }); 


                app.get('/group_plan/CRN_start', function (req, res) {
      res.render('group_plan/CRN_start',
                {'assetPath' : assetPath});


    }); 


                app.get('/group_plan/postcode_start', function (req, res) {
      res.render('group_plan/postcode_start',
                {'assetPath' : assetPath});


    }); 


                app.get('/group_plan/minimalv3_start', function (req, res) {
      res.render('group_plan/minimalv3_start',
                {'assetPath' : assetPath});

    }); 


                app.get('/group_plan/minimal_start', function (req, res) {
      res.render('group_plan/minimal_start',
                {'assetPath' : assetPath});

    }); 

                app.get('/group_plan/minimalv2_pages_start', function (req, res) {
      res.render('group_plan/minimalv2_pages_start',
                {'assetPath' : assetPath});

    }); 

                 app.get('/checking_service/multiple_upload1', function (req, res) {
      res.render('checking_service/multiple_upload1',
                {'assetPath' : assetPath});

       });

                app.get('/checking_service/multiple_upload2', function (req, res) {
      res.render('checking_service/multiple_upload2',
                {'assetPath' : assetPath});

       });

                app.get('/checking_service/multiple_upload3', function (req, res) {
      res.render('checking_service/multiple_upload3',
                {'assetPath' : assetPath});

       });

                app.get('/checking_service/multiple_upload2_error', function (req, res) {
      res.render('checking_service/multiple_upload2_error',
                {'assetPath' : assetPath});

       });

                app.get('/checking_service/nonjs_upload1', function (req, res) {
      res.render('checking_service/nonjs_upload1',
                {'assetPath' : assetPath});

       });


                app.get('/checking_service/nonjs_upload2', function (req, res) {
      res.render('checking_service/nonjs_upload2',
                {'assetPath' : assetPath});

       });

                app.get('/checking_service/nonjs_upload3', function (req, res) {
      res.render('checking_service/nonjs_upload3',
                {'assetPath' : assetPath});

       });

                app.get('/checking_service/nonjs_upload_error_report', function (req, res) {
      res.render('checking_service/nonjs_upload_error_report',
                {'assetPath' : assetPath});

       });


                app.get('/checking_service/nonjs_upload2_error', function (req, res) {
      res.render('checking_service/nonjs_upload2_error',
                {'assetPath' : assetPath});

       });

                

        app.get('/checking_service/js_uploadnew_error', function (req, res) {
      res.render('checking_service/js_uploadnew_error',
                {'assetPath' : assetPath});

       });


        app.get('/checking_service/new_company_details', function (req, res) {
      res.render('checking_service/new_company_details',
                {'assetPath' : assetPath});

       });


         app.get('/checking_service/error_messaging', function (req, res) {
      res.render('checking_service/error_messaging',
                {'assetPath' : assetPath});

       });

app.get('/group_plan/start', function (req, res) {
      res.render('group_plan/start',
                {'assetPath' : assetPath});

       });

app.get('/group_plan/add_organiser_details', function (req, res) {
      res.render('group_plan/add_organiser_details',
                {'assetPath' : assetPath});

       });


app.get('/group_plan/reportable_events', function (req, res) {
      res.render('group_plan/reportable_events',
                {'assetPath' : assetPath});

       });

app.get('/group_plan/select_sheet_type', function (req, res) {
      res.render('group_plan/select_sheet_type',
                {'assetPath' : assetPath});

       });

app.get('/group_plan/select_sheet_type', function (req, res) {
      res.render('group_plan/select_sheet_type',
                {'assetPath' : assetPath});

       });



// SIP End of Year Return Scenario 1
       app.get('/SIP/scenario1_0_Start_SIP', function (req, res) {
      res.render('SIP/scenario1_0_Start_SIP',
                {'assetPath' : assetPath});

    });

              app.get('/SIP/scenario1_1_What_SIP', function (req, res) {
      res.render('SIP/scenario1_1_What_SIP',
                {'assetPath' : assetPath});

    });


                      app.get('/SIP/scenario1_14_csv_ods_SIP', function (req, res) {
      res.render('SIP/scenario1_14_csv_ods_SIP',
                {'assetPath' : assetPath});

    });

                       app.get('/SIP/scenario1_15_ods_SIP', function (req, res) {
      res.render('SIP/scenario1_15_ods_SIP',
                {'assetPath' : assetPath});

    });

                       app.get('/SIP/scenario1_16_group_company_summary', function (req, res) {
      res.render('SIP/scenario1_16_group_company_summary',
                {'assetPath' : assetPath});

    });



                       


           

              app.get('/SIP/scenario1_12_manual_csv_SIP', function (req, res) {
      res.render('SIP/scenario1_12_manual_csv_SIP',
                {'assetPath' : assetPath});

    });


              app.get('/SIP/scenario1_13_company_details_SIP', function (req, res) {
      res.render('SIP/scenario1_13_company_details_SIP',
                {'assetPath' : assetPath});

    });



             

              app.get('/SIP/test', function (req, res) {
      res.render('SIP/test',
                {'assetPath' : assetPath});

    });

                          app.get('/SIP/scenario1_2_Group_SIP', function (req, res) {
      res.render('SIP/scenario1_2_Group_SIP',
                {'assetPath' : assetPath});

    });

          app.get('/SIP/scenario1_3_Group_Details_SIP', function (req, res) {
      res.render('SIP/scenario1_3_Group_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP/scenario1_4_Group_Edit_SIP', function (req, res) {
      res.render('SIP/scenario1_4_Group_Edit_SIP',
                {'assetPath' : assetPath});

    });

         
             app.get('/SIP/scenario1_5_Trustee_Details_SIP', function (req, res) {
      res.render('SIP/scenario1_5_Trustee_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP/scenario1_6_Trustee_Edit_SIP', function (req, res) {
      res.render('SIP/scenario1_6_Trustee_Edit_SIP',
                {'assetPath' : assetPath});

    });

app.get('/SIP/scenario1_7_Alterations_SIP', function (req, res) {
      res.render('SIP/scenario1_7_Alterations_SIP',
                {'assetPath' : assetPath});

    });      

                app.get('/SIP/scenario1_8_Alterations_Check_SIP', function (req, res) {
      res.render('SIP/scenario1_8_Alterations_Check_SIP',
                {'assetPath' : assetPath});

    }); 

                app.get('/SIP/scenario1_9_Summary_SIP', function (req, res) {
      res.render('SIP/scenario1_9_Summary_SIP',
                {'assetPath' : assetPath});

    }); 


             app.get('/SIP/scenario1_10_Confirmation_SIP', function (req, res) {
      res.render('SIP/scenario1_10_Confirmation_SIP',
                {'assetPath' : assetPath});

    }); 


// SIP End of Year Return Scenario 2

       app.get('/SIP/scenario2_0_Start_SIP', function (req, res) {
      res.render('SIP/scenario2_0_Start_SIP',
                {'assetPath' : assetPath});

    });

              app.get('/SIP/scenario2_1_What_SIP', function (req, res) {
      res.render('SIP/scenario2_1_What_SIP',
                {'assetPath' : assetPath});

    });

               app.get('/SIP/scenario2_2_Check_SIP', function (req, res) {
      res.render('SIP/scenario2_2_Check_SIP',
                {'assetPath' : assetPath});

    });

                 app.get('/SIP/scenario2_3_Errors_SIP', function (req, res) {
      res.render('SIP/scenario2_3_Errors_SIP',
                {'assetPath' : assetPath});

    });

  app.get('/SIP/scenario2_4_Errors_SIP', function (req, res) {
      res.render('SIP/scenario2_4_Errors_SIP',
                {'assetPath' : assetPath});

    });


   

// CSOP End of Year Return Scenario 3

       app.get('/CSOP/scenario1_0_Start_CSOP', function (req, res) {
      res.render('CSOP/scenario1_0_Start_CSOP',
                {'assetPath' : assetPath});

    });

       app.get('/CSOP/CSOP_errors_scenario2_4', function (req, res) {
      res.render('CSOP/CSOP_errors_scenario2_4',
                {'assetPath' : assetPath});

    });


       app.get('/CSOP/CSOP_errors_scenario2_4', function (req, res) {
      res.render('CSOP/CSOP_errors_scenario2_4',
                {'assetPath' : assetPath});

    });



        app.get('/CSOP/scenario1_0_Start_CSOP_ERRORS', function (req, res) {
      res.render('CSOP/scenario1_0_Start_CSOP_ERRORS',
                {'assetPath' : assetPath});

    });

        app.get('/CSOP/scenario1_13_company_details_CSOP', function (req, res) {
      res.render('CSOP/scenario1_13_company_details_CSOP',
                {'assetPath' : assetPath});

    });

        app.get('/CSOP/scenario1_16_CSOP_company_summary', function (req, res) {
      res.render('CSOP/scenario1_16_CSOP_company_summary',
                {'assetPath' : assetPath});

    });


      app.get('/CSOP/scenario1_17_upload_CSOP_CSV', function (req, res) {
      res.render('CSOP/scenario1_17_upload_CSOP_CSV',
                {'assetPath' : assetPath});

    });


       app.get('/CSOP/scenario1_1_What_CSOP', function (req, res) {
      res.render('CSOP/scenario1_1_What_CSOP',
                {'assetPath' : assetPath});

    });



       app.get('/CSOP/scenario1_1_What_CSOP_ERRORS', function (req, res) {
      res.render('CSOP/scenario1_1_What_CSOP_ERRORS',
                {'assetPath' : assetPath});

    });


      app.get('/CSOP/scenario1_18_upload_CSOP_CSV', function (req, res) {
      res.render('CSOP/scenario1_18_upload_CSOP_CSV',
                {'assetPath' : assetPath});

    });


app.get('/CSOP/scenario1_18_upload_CSOP_CSV_ERRORS', function (req, res) {
      res.render('CSOP/scenario1_18_upload_CSOP_CSV_ERRORS',
                {'assetPath' : assetPath});

    });


       app.get('/CSOP/scenario1_11_company_CSOP', function (req, res) {
      res.render('CSOP/scenario1_11_company_CSOP',
                {'assetPath' : assetPath});

    });



 app.get('/CSOP/CSOP_errors_scenario2_5', function (req, res) {
      res.render('CSOP/CSOP_errors_scenario2_5',
                {'assetPath' : assetPath});

    });


       

              app.get('/CSOP/scenario3_1_What_CSOP', function (req, res) {
      res.render('CSOP/scenario3_1_What_CSOP',
                {'assetPath' : assetPath});

    });

          app.get('/CSOP/scenario3_2_Check_CSOP', function (req, res) {
      res.render('CSOP/scenario3_2_Check_CSOP',
                {'assetPath' : assetPath});

    });

   app.get('/CSOP/scenario3_3_Group_CSOP', function (req, res) {
      res.render('CSOP/scenario3_3_Group_CSOP',
                {'assetPath' : assetPath});

    });

          app.get('/CSOP/scenario3_4_Group_Details_CSOP', function (req, res) {
      res.render('CSOP/scenario3_4_Group_Details_CSOP',
                {'assetPath' : assetPath});

    });

            app.get('/CSOP/scenario3_5_Group_Edit_CSOP', function (req, res) {
      res.render('CSOP/scenario3_5_Group_Edit_CSOP',
                {'assetPath' : assetPath});

    });

         
             app.get('/CSOP/scenario3_6_Trustee_Details_CSOP', function (req, res) {
      res.render('CSOP/scenario3_6_Trustee_Details_CSOP',
                {'assetPath' : assetPath});

    });

            app.get('/CSOP/scenario3_7_Trustee_Edit_CSOP', function (req, res) {
      res.render('CSOP/scenario3_7_Trustee_Edit_CSOP',
                {'assetPath' : assetPath});

    });

app.get('/CSOP/scenario3_8_Alterations_CSOP', function (req, res) {
      res.render('CSOP/scenario3_8_Alterations_CSOP',
                {'assetPath' : assetPath});

    });      

                app.get('/CSOP/scenario3_9_Alterations_Check_CSOP', function (req, res) {
      res.render('CSOP/scenario3_9_Alterations_Check_CSOP',
                {'assetPath' : assetPath});

    }); 


                app.get('/CSOP/scenario2_4_Errors_CSOP', function (req, res) {
      res.render('CSOP/scenario2_4_Errors_CSOP',
                {'assetPath' : assetPath});

    }); 


                app.get('/CSOP/scenario3_10_Summary_CSOP', function (req, res) {
      res.render('CSOP/scenario3_10_Summary_CSOP',
                {'assetPath' : assetPath});

    }); 


             app.get('/CSOP/scenario3_11_Confirmation_CSOP', function (req, res) {
      res.render('CSOP/scenario3_11_Confirmation_CSOP',
                {'assetPath' : assetPath});

    }); 


            app.get('/CSOP/scenario1_17_upload_CSV', function (req, res) {
      res.render('CSOP/scenario1_17_upload_CSV',
                {'assetPath' : assetPath});

    }); 


            app.get('/CSOP/scenario1_17_upload_CSV', function (req, res) {
      res.render('CSOP/scenario1_17_upload_CSV',
                {'assetPath' : assetPath});

    }); 



            app.get('/CSOP/scenario1_7_Alterations_CSOP', function (req, res) {
      res.render('CSOP/scenario1_7_Alterations_CSOP',
                {'assetPath' : assetPath});

    }); 


 app.get('/CSOP/scenario1_14_csv_ods_CSOP', function (req, res) {
      res.render('CSOP/scenario1_14_csv_ods_CSOP',
                {'assetPath' : assetPath});

    }); 



            app.get('/CSOP/scenario1_14_csv_ods_CSOP_ERRORS', function (req, res) {
      res.render('CSOP/scenario1_14_csv_ods_CSOP_ERRORS',
                {'assetPath' : assetPath});

    }); 


            app.get('/CSOP/scenario1_15_ods_CSOP', function (req, res) {
      res.render('CSOP/scenario1_15_ods_CSOP',
                {'assetPath' : assetPath});

    }); 

            app.get('/CSOP/scenario1_15_ods_CSOP_ERRORS', function (req, res) {
      res.render('CSOP/scenario1_15_ods_CSOP_ERRORS',
                {'assetPath' : assetPath});

    }); 

            app.get('/CSOP/scenario1_2_Group_CSOP', function (req, res) {
      res.render('CSOP/scenario1_2_Group_CSOP',
                {'assetPath' : assetPath});

    }); 

            app.get('/CSOP/scenario1_12_manual_csv_CSOP', function (req, res) {
      res.render('CSOP/scenario1_12_manual_csv_CSOP',
                {'assetPath' : assetPath});

    }); 


            app.get('/CSOP/scenario2_5_Errors_CSOP', function (req, res) {
      res.render('CSOP/scenario2_5_Errors_CSOP',
                {'assetPath' : assetPath});

    }); 







            




// OTHER Scenarios

       app.get('/OTHER/scenario1_0_Start_OTHER', function (req, res) {
      res.render('OTHER/scenario1_0_Start_OTHER',
                {'assetPath' : assetPath});

    });

        app.get('/OTHER/scenario1_13_company_details_OTHER', function (req, res) {
      res.render('OTHER/scenario1_13_company_details_OTHER',
                {'assetPath' : assetPath});

    });

        app.get('/OTHER/scenario1_16_OTHER_company_summary', function (req, res) {
      res.render('OTHER/scenario1_16_OTHER_company_summary',
                {'assetPath' : assetPath});

    });


app.get('/OTHER/scenario1_18_upload_OTHER_CSV_ERROR', function (req, res) {
      res.render('OTHER/scenario1_18_upload_OTHER_CSV_ERROR',
                {'assetPath' : assetPath});

    });


app.get('/OTHER/scenario1_15_ods_OTHER_ERROR', function (req, res) {
      res.render('OTHER/scenario1_15_ods_OTHER_ERROR',
                {'assetPath' : assetPath});

    });


app.get('/OTHER/OTHER_errors_scenario2_4', function (req, res) {
      res.render('OTHER/OTHER_errors_scenario2_4',
                {'assetPath' : assetPath});

    });



app.get('/OTHER/OTHER_errors_scenario2_5', function (req, res) {
      res.render('OTHER/OTHER_errors_scenario2_5',
                {'assetPath' : assetPath});

    });





app.get('/OTHER/scenario1_14_csv_ods_OTHER_ERROR', function (req, res) {
      res.render('OTHER/scenario1_14_csv_ods_OTHER_ERROR',
                {'assetPath' : assetPath});

    });



      app.get('/OTHER/scenario1_17_upload_OTHER_CSV', function (req, res) {
      res.render('OTHER/scenario1_17_upload_OTHER_CSV',
                {'assetPath' : assetPath});

    });


       app.get('/OTHER/scenario1_1_What_OTHER', function (req, res) {
      res.render('OTHER/scenario1_1_What_OTHER',
                {'assetPath' : assetPath});

    });


      app.get('/OTHER/scenario1_18_upload_OTHER_CSV', function (req, res) {
      res.render('OTHER/scenario1_18_upload_OTHER_CSV',
                {'assetPath' : assetPath});

    });



       app.get('/OTHER/scenario1_11_company_OTHER', function (req, res) {
      res.render('OTHER/scenario1_11_company_OTHER',
                {'assetPath' : assetPath});

    });

              app.get('/OTHER/scenario3_1_What_OTHER', function (req, res) {
      res.render('OTHER/scenario3_1_What_OTHER',
                {'assetPath' : assetPath});

    });

          app.get('/OTHER/scenario3_2_Check_OTHER', function (req, res) {
      res.render('OTHER/scenario3_2_Check_OTHER',
                {'assetPath' : assetPath});

    });

   app.get('/OTHER/scenario3_3_Group_OTHER', function (req, res) {
      res.render('OTHER/scenario3_3_Group_OTHER',
                {'assetPath' : assetPath});

    });

          app.get('/OTHER/scenario3_4_Group_Details_OTHER', function (req, res) {
      res.render('OTHER/scenario3_4_Group_Details_OTHER',
                {'assetPath' : assetPath});

    });

            app.get('/OTHER/scenario3_5_Group_Edit_OTHER', function (req, res) {
      res.render('OTHER/scenario3_5_Group_Edit_OTHER',
                {'assetPath' : assetPath});

    });

         
             app.get('/OTHER/scenario3_6_Trustee_Details_OTHER', function (req, res) {
      res.render('OTHER/scenario3_6_Trustee_Details_OTHER',
                {'assetPath' : assetPath});

    });

            app.get('/OTHER/scenario3_7_Trustee_Edit_OTHER', function (req, res) {
      res.render('OTHER/scenario3_7_Trustee_Edit_OTHER',
                {'assetPath' : assetPath});

    });



app.get('/OTHER/scenario1_0_Start_EMI_ERROR', function (req, res) {
      res.render('OTHER/scenario1_0_Start_EMI_ERROR',
                {'assetPath' : assetPath});

    });


app.get('/OTHER/scenario1_1_What_EMI_ERROR', function (req, res) {
      res.render('OTHER/scenario1_1_What_EMI_ERROR',
                {'assetPath' : assetPath});

    });


app.get('/OTHER/scenario1_14_csv_ods_EMI_ERROR', function (req, res) {
      res.render('OTHER/scenario1_14_csv_ods_EMI_ERROR',
                {'assetPath' : assetPath});

    });


app.get('/OTHER/scenario1_18_upload_EMI_CSV_ERROR', function (req, res) {
      res.render('OTHER/scenario1_18_upload_EMI_CSV_ERROR',
                {'assetPath' : assetPath});

    });


app.get('/OTHER/scenario1_15_ods_EMI_ERROR', function (req, res) {
      res.render('OTHER/scenario1_15_ods_EMI_ERROR',
                {'assetPath' : assetPath});

    });


app.get('/OTHER/EMI_errors_scenario2_5', function (req, res) {
      res.render('OTHER/EMI_errors_scenario2_5',
                {'assetPath' : assetPath});

    });

app.get('/OTHER/EMI_errors_scenario2_4', function (req, res) {
      res.render('OTHER/EMI_errors_scenario2_4',
                {'assetPath' : assetPath});

    });



app.get('/OTHER/scenario1_0_Start_OTHER_ERROR', function (req, res) {
      res.render('OTHER/scenario1_0_Start_OTHER_ERROR',
                {'assetPath' : assetPath});

    });


app.get('/OTHER/scenario1_1_What_OTHER_ERROR', function (req, res) {
      res.render('OTHER/scenario1_1_What_OTHER_ERROR',
                {'assetPath' : assetPath});

    });




app.get('/OTHER/scenario3_8_Alterations_OTHER', function (req, res) {
      res.render('OTHER/scenario3_8_Alterations_OTHER',
                {'assetPath' : assetPath});

    });      

                app.get('/OTHER/scenario3_9_Alterations_Check_OTHER', function (req, res) {
      res.render('OTHER/scenario3_9_Alterations_Check_OTHER',
                {'assetPath' : assetPath});

    }); 

                app.get('/OTHER/scenario3_10_Summary_OTHER', function (req, res) {
      res.render('OTHER/scenario3_10_Summary_OTHER',
                {'assetPath' : assetPath});

    }); 


             app.get('/OTHER/scenario3_11_Confirmation_OTHER', function (req, res) {
      res.render('OTHER/scenario3_11_Confirmation_OTHER',
                {'assetPath' : assetPath});

    }); 


            app.get('/OTHER/scenario1_17_upload_CSV', function (req, res) {
      res.render('OTHER/scenario1_17_upload_CSV',
                {'assetPath' : assetPath});

    }); 

            app.get('/OTHER/scenario1_14_csv_ods_OTHER', function (req, res) {
      res.render('OTHER/scenario1_14_csv_ods_OTHER',
                {'assetPath' : assetPath});

    }); 


            app.get('/OTHER/scenario1_15_ods_OTHER', function (req, res) {
      res.render('OTHER/scenario1_15_ods_OTHER',
                {'assetPath' : assetPath});

    }); 

            app.get('/OTHER/scenario1_2_Group_OTHER', function (req, res) {
      res.render('CSOP/scenario1_2_Group_CSOP',
                {'assetPath' : assetPath});

    }); 

            app.get('/OTHER/scenario1_12_manual_csv_OTHER', function (req, res) {
      res.render('OTHER/scenario1_12_manual_csv_OTHER',
                {'assetPath' : assetPath});

    }); 


            app.get('/OTHER/scenario2_5_Errors_Other', function (req, res) {
      res.render('OTHER/scenario2_5_Errors_Other',
                {'assetPath' : assetPath});

    }); 




// EMI Scenarios

       app.get('/EMI/scenario1_0_Start_EMI', function (req, res) {
      res.render('EMI/scenario1_0_Start_EMI',
                {'assetPath' : assetPath});

    });


       app.get('/EMI/scenario1_0_Start_EMI_ERROR', function (req, res) {
      res.render('EMI/scenario1_0_Start_EMI_ERROR',
                {'assetPath' : assetPath});

    });

        app.get('/EMI/scenario1_13_company_details_EMI', function (req, res) {
      res.render('EMI/scenario1_13_company_details_EMI',
                {'assetPath' : assetPath});

    });


        app.get('/EMI/scenario1_10_Confirmation_EMI', function (req, res) {
      res.render('EMI/scenario1_10_Confirmation_EMI',
                {'assetPath' : assetPath});

    });


        app.get('/EMI/scenario1_9_Summary_EMI', function (req, res) {
      res.render('EMI/scenario1_9_Summary_EMI',
                {'assetPath' : assetPath});

    });


app.get('/EMI/scenario1_2_Group_EMI', function (req, res) {
      res.render('EMI/scenario1_2_Group_EMI',
                {'assetPath' : assetPath});

    });



        app.get('/EMI/scenario1_16_EMI_company_summary', function (req, res) {
      res.render('EMI/scenario1_16_EMI_company_summary',
                {'assetPath' : assetPath});

    });


      app.get('/EMI/scenario1_17_upload_EMI_CSV', function (req, res) {
      res.render('EMI/scenario1_17_upload_EMI_CSV',
                {'assetPath' : assetPath});

    });


       app.get('/EMI/scenario1_1_What_EMI', function (req, res) {
      res.render('EMI/scenario1_1_What_EMI',
                {'assetPath' : assetPath});

    });


app.get('/EMI/scenario1_1_What_EMI_ERROR', function (req, res) {
      res.render('EMI/scenario1_1_What_EMI_ERROR',
                {'assetPath' : assetPath});

    });


app.get('/EMI/EMI_errors_scenario2_4', function (req, res) {
      res.render('EMI/EMI_errors_scenario2_4',
                {'assetPath' : assetPath});

    });


app.get('/EMI/EMI_errors_scenario2_5', function (req, res) {
      res.render('EMI/EMI_errors_scenario2_5',
                {'assetPath' : assetPath});

    });


app.get('/EMI/scenario2_5_Errors_EMI', function (req, res) {
      res.render('EMI/scenario2_5_Errors_EMI',
                {'assetPath' : assetPath});

    });




app.get('/EMI/scenario1_14_csv_ods_EMI_ERROR', function (req, res) {
      res.render('EMI/scenario1_14_csv_ods_EMI_ERROR',
                {'assetPath' : assetPath});

    });



app.get('/EMI/scenario1_18_upload_EMI_CSV_ERROR', function (req, res) {
      res.render('EMI/scenario1_18_upload_EMI_CSV_ERROR',
                {'assetPath' : assetPath});

    });


app.get('/EMI/scenario1_15_ods_EMI_ERROR', function (req, res) {
      res.render('EMI/scenario1_15_ods_EMI_ERROR',
                {'assetPath' : assetPath});

    });



      app.get('/EMI/scenario1_18_upload_EMI_CSV', function (req, res) {
      res.render('EMI/scenario1_18_upload_EMI_CSV',
                {'assetPath' : assetPath});

    });



       app.get('/EMI/scenario1_11_company_EMI', function (req, res) {
      res.render('EMI/scenario1_11_company_EMI',
                {'assetPath' : assetPath});

    });

              app.get('/EMI/scenario3_1_What_EMI', function (req, res) {
      res.render('EMI/scenario3_1_What_EMI',
                {'assetPath' : assetPath});

    });

          app.get('/EMI/scenario3_2_Check_EMI', function (req, res) {
      res.render('EMI/scenario3_2_Check_EMI',
                {'assetPath' : assetPath});

    });

        app.get('/EMI/scenario3_3_Group_EMI', function (req, res) {
      res.render('EMI/scenario3_3_Group_EMI',
                {'assetPath' : assetPath});

    });

          app.get('/EMI/scenario3_4_Group_Details_EMI', function (req, res) {
      res.render('EMI/scenario3_4_Group_Details_EMI',
                {'assetPath' : assetPath});

    });

            app.get('/EMI/scenario3_5_Group_Edit_EMI', function (req, res) {
      res.render('EMI/scenario3_5_Group_Edit_EMI',
                {'assetPath' : assetPath});

    });

         
             app.get('/EMI/scenario3_6_Trustee_Details_EMI', function (req, res) {
      res.render('EMI/scenario3_6_Trustee_Details_EMI',
                {'assetPath' : assetPath});

    });

            app.get('/EMI/scenario3_7_Trustee_Edit_EMI', function (req, res) {
      res.render('EMI/scenario3_7_Trustee_Edit_EMI',
                {'assetPath' : assetPath});

    });

          app.get('/EMI/scenario3_8_Alterations_EMI', function (req, res) {
      res.render('EMI/scenario3_8_Alterations_EMI',
                {'assetPath' : assetPath});

    });      

                app.get('/EMI/scenario3_9_Alterations_Check_EMI', function (req, res) {
      res.render('EMI/scenario3_9_Alterations_Check_EMI',
                {'assetPath' : assetPath});

    }); 

                app.get('/EMI/scenario3_10_Summary_EMI', function (req, res) {
      res.render('EMI/scenario3_10_Summary_EMI',
                {'assetPath' : assetPath});

    }); 


             app.get('/EMI/scenario3_11_Confirmation_EMI', function (req, res) {
      res.render('EMI/scenario3_11_Confirmation_EMI',
                {'assetPath' : assetPath});

    }); 


            app.get('/EMI/scenario1_17_upload_CSV', function (req, res) {
      res.render('EMI/scenario1_17_upload_CSV',
                {'assetPath' : assetPath});

    }); 

            app.get('/EMI/scenario1_14_csv_ods_EMI', function (req, res) {
      res.render('EMI/scenario1_14_csv_ods_EMI',
                {'assetPath' : assetPath});

    }); 


            app.get('/EMI/scenario1_15_ods_EMI', function (req, res) {
      res.render('EMI/scenario1_15_ods_EMI',
                {'assetPath' : assetPath});

    }); 

            app.get('/EMI/scenario1_2_Group_EMI', function (req, res) {
      res.render('EMI/scenario1_2_Group_EMI',
                {'assetPath' : assetPath});

    }); 

            app.get('/EMI/scenario1_12_manual_csv_EMI', function (req, res) {
      res.render('EMI/scenario1_12_manual_csv_EMI',
                {'assetPath' : assetPath});

    }); 



// SAYE End of Year Return Scenario 3

       app.get('/SAYE/scenario1_0_Start_SAYE', function (req, res) {
      res.render('SAYE/scenario1_0_Start_SAYE',
                {'assetPath' : assetPath});

    });

       app.get('/SAYE/SAYE_errors_scenario2_4', function (req, res) {
      res.render('SAYE/SAYE_errors_scenario2_4',
                {'assetPath' : assetPath});

    });


       app.get('/SAYE/SAYE_errors_scenario2_4', function (req, res) {
      res.render('SAYE/SAYE_errors_scenario2_4',
                {'assetPath' : assetPath});

    });



        app.get('/SAYE/scenario1_0_Start_SAYE_ERRORS', function (req, res) {
      res.render('SAYE/scenario1_0_Start_SAYE_ERRORS',
                {'assetPath' : assetPath});

    });

        app.get('/SAYE/scenario1_13_company_details_SAYE', function (req, res) {
      res.render('SAYE/scenario1_13_company_details_SAYE',
                {'assetPath' : assetPath});

    });

        app.get('/SAYE/scenario1_16_SAYE_company_summary', function (req, res) {
      res.render('SAYE/scenario1_16_SAYE_company_summary',
                {'assetPath' : assetPath});

    });


      app.get('/SAYE/scenario1_17_upload_SAYE_CSV', function (req, res) {
      res.render('SAYE/scenario1_17_upload_SAYE_CSV',
                {'assetPath' : assetPath});

    });


       app.get('/SAYE/scenario1_1_What_SAYE', function (req, res) {
      res.render('SAYE/scenario1_1_What_SAYE',
                {'assetPath' : assetPath});

    });



       app.get('/SAYE/scenario1_1_What_SAYE_ERRORS', function (req, res) {
      res.render('SAYE/scenario1_1_What_SAYE_ERRORS',
                {'assetPath' : assetPath});

    });


      app.get('/SAYE/scenario1_18_upload_SAYE_CSV', function (req, res) {
      res.render('SAYE/scenario1_18_upload_CSOP_CSV',
                {'assetPath' : assetPath});

    });


app.get('/SAYE/scenario1_18_upload_SAYE_CSV_ERRORS', function (req, res) {
      res.render('SAYE/scenario1_18_upload_SAYE_CSV_ERRORS',
                {'assetPath' : assetPath});

    });


       app.get('/SAYE/scenario1_11_company_SAYE', function (req, res) {
      res.render('SAYE/scenario1_11_company_SAYE',
                {'assetPath' : assetPath});

    });

              app.get('/SAYE/scenario3_1_What_SAYE', function (req, res) {
      res.render('SAYE/scenario3_1_What_SAYE',
                {'assetPath' : assetPath});

    });

          app.get('/SAYE/scenario3_2_Check_SAYE', function (req, res) {
      res.render('SAYE/scenario3_2_Check_SAYE',
                {'assetPath' : assetPath});

    });

   app.get('/SAYE/scenario3_3_Group_SAYE', function (req, res) {
      res.render('SAYE/scenario3_3_Group_SAYE',
                {'assetPath' : assetPath});

    });

          app.get('/SAYE/scenario3_4_Group_Details_SAYE', function (req, res) {
      res.render('SAYE/scenario3_4_Group_Details_SAYE',
                {'assetPath' : assetPath});

    });

            app.get('/SAYE/scenario3_5_Group_Edit_SAYE', function (req, res) {
      res.render('SAYE/scenario3_5_Group_Edit_SAYE',
                {'assetPath' : assetPath});

    });

         
             app.get('/SAYE/scenario3_6_Trustee_Details_SAYE', function (req, res) {
      res.render('SAYE/scenario3_6_Trustee_Details_SAYE',
                {'assetPath' : assetPath});

    });

            app.get('/SAYE/scenario3_7_Trustee_Edit_SAYE', function (req, res) {
      res.render('SAYE/scenario3_7_Trustee_Edit_SAYE',
                {'assetPath' : assetPath});

    });



app.get('/SAYE/scenario1_7_Alterations_SAYE', function (req, res) {
      res.render('SAYE/scenario1_7_Alterations_SAYE',
                {'assetPath' : assetPath});

    });


app.get('/SAYE/scenario3_9_Alterations_Check_SAYE', function (req, res) {
      res.render('SAYE/scenario3_9_Alterations_Check_SAYE',
                {'assetPath' : assetPath});

    });



app.get('/SAYE/scenario3_8_Alterations_SAYE', function (req, res) {
      res.render('SAYE/scenario3_8_Alterations_SAYE',
                {'assetPath' : assetPath});

    });      



app.get('/SAYE/scenario1_14_csv_ods_CSOP_ERRORS', function (req, res) {
      res.render('SAYE/scenario1_14_csv_ods_CSOP_ERRORS',
                {'assetPath' : assetPath});

    });      

                app.get('/SAYE/scenario3_9_Alterations_Check_SAYE', function (req, res) {
      res.render('SAYE/scenario3_9_Alterations_Check_SAYE',
                {'assetPath' : assetPath});

    }); 

                app.get('/SAYE/scenario3_10_Summary_SAYE', function (req, res) {
      res.render('SAYE/scenario3_10_Summary_SAYE',
                {'assetPath' : assetPath});

    }); 


             app.get('/SAYE/scenario3_11_Confirmation_SAYE', function (req, res) {
      res.render('SAYE/scenario3_11_Confirmation_SAYE',
                {'assetPath' : assetPath});

    }); 


            app.get('/SAYE/scenario1_17_upload_CSV', function (req, res) {
      res.render('SAYE/scenario1_17_upload_CSV',
                {'assetPath' : assetPath});

    }); 


            app.get('/SAYE/scenario1_17_upload_CSV', function (req, res) {
      res.render('SAYE/scenario1_17_upload_CSV',
                {'assetPath' : assetPath});

    }); 



            app.get('/SAYE/scenario1_7_Alterations_CSOP', function (req, res) {
      res.render('SAYE/scenario1_7_Alterations_CSOP',
                {'assetPath' : assetPath});

    }); 


 app.get('/SAYE/scenario1_14_csv_ods_SAYE', function (req, res) {
      res.render('SAYE/scenario1_14_csv_ods_SAYE',
                {'assetPath' : assetPath});

    }); 



            app.get('/SAYE/scenario1_14_csv_ods_SAYE_ERRORS', function (req, res) {
      res.render('SAYE/scenario1_14_csv_ods_SAYE_ERRORS',
                {'assetPath' : assetPath});

    }); 


            app.get('/SAYE/scenario1_15_ods_SAYE', function (req, res) {
      res.render('SAYE/scenario1_15_ods_SAYE',
                {'assetPath' : assetPath});

    }); 

            app.get('/SAYE/scenario1_15_ods_SAYE_ERRORS', function (req, res) {
      res.render('SAYE/scenario1_15_ods_SAYE_ERRORS',
                {'assetPath' : assetPath});

    }); 

            app.get('/SAYE/scenario1_2_Group_SAYE', function (req, res) {
      res.render('SAYE/scenario1_2_Group_SAYE',
                {'assetPath' : assetPath});

    }); 

            app.get('/SAYE/scenario1_12_manual_csv_SAYE', function (req, res) {
      res.render('SAYE/scenario1_12_manual_csv_SAYE',
                {'assetPath' : assetPath});

    }); 



            // SIP End of Year Return Scenario 3

       app.get('/SIP/scenario1_0_Start_SIP', function (req, res) {
      res.render('SIP/scenario1_0_Start_SIP',
                {'assetPath' : assetPath});

    });

       app.get('/SIP/SIP_errors_scenario2_4', function (req, res) {
      res.render('SIP/SIP_errors_scenario2_4',
                {'assetPath' : assetPath});

    });


       app.get('/SIP/SIP_errors_scenario2_4', function (req, res) {
      res.render('SIP/SIP_errors_scenario2_4',
                {'assetPath' : assetPath});

    });


       app.get('/SIP/SIP_errors_scenario2_5', function (req, res) {
      res.render('SIP/SIP_errors_scenario2_5',
                {'assetPath' : assetPath});

    });



        app.get('/SIP/scenario1_0_Start_SIP_ERRORS', function (req, res) {
      res.render('SIP/scenario1_0_Start_SIP_ERRORS',
                {'assetPath' : assetPath});

    });

        app.get('/SIP/scenario1_13_company_details_SIP', function (req, res) {
      res.render('SIP/scenario1_13_company_details_SIP',
                {'assetPath' : assetPath});

    });

        app.get('/SIP/scenario1_16_SIP_company_summary', function (req, res) {
      res.render('SIP/scenario1_16_SIP_company_summary',
                {'assetPath' : assetPath});

    });


 app.get('/SIP/scenario1_1_What_SIP_ERRORS', function (req, res) {
      res.render('SIP/scenario1_1_What_SIP_ERRORS',
                {'assetPath' : assetPath});

    });





      app.get('/SIP/scenario1_17_upload_SIP_CSV', function (req, res) {
      res.render('SIP/scenario1_17_upload_SIP_CSV',
                {'assetPath' : assetPath});

    });


       app.get('/SIP/scenario1_1_What_SIP', function (req, res) {
      res.render('SIP/scenario1_1_What_SIP',
                {'assetPath' : assetPath});

    });



       app.get('/SIP/scenario1_1_What_SIP_ERRORS', function (req, res) {
      res.render('SIP/scenario1_1_What_SIP_ERRORS',
                {'assetPath' : assetPath});

    });


      app.get('/SIP/scenario1_18_upload_SIP_CSV', function (req, res) {
      res.render('SIP/scenario1_18_upload_CSOP_CSV',
                {'assetPath' : assetPath});

    });



app.get('/SIP/scenario1_20_SIP_company_single_summary', function (req, res) {
      res.render('SIP/scenario1_20_SIP_company_single_summary',
                {'assetPath' : assetPath});

    });



app.get('/CSOP/scenario1_20_CSOP_company_single_summary', function (req, res) {
      res.render('CSOP/scenario1_20_CSOP_company_single_summary',
                {'assetPath' : assetPath});

    });


app.get('/SAYE/scenario1_20_SAYE_company_single_summary', function (req, res) {
      res.render('SAYE/scenario1_20_SAYE_company_single_summary',
                {'assetPath' : assetPath});

    });

app.get('/EMI/scenario1_20_EMI_company_single_summary', function (req, res) {
      res.render('EMI/scenario1_20_EMI_company_single_summary',
                {'assetPath' : assetPath});

    });







app.get('/SIP/scenario1_0_Start_CSOP_ERRORS', function (req, res) {
      res.render('SIP/scenario1_0_Start_CSOP_ERRORS',
                {'assetPath' : assetPath});

    });


app.get('/SIP/scenario1_17_upload_CSV_ERRORS', function (req, res) {
      res.render('SIP/scenario1_17_upload_CSV_ERRORS',
                {'assetPath' : assetPath});

    });



      

app.get('/SIP/scenario1_18_upload_SIP_CSV_ERRORS', function (req, res) {
      res.render('SIP/scenario1_18_upload_SIP_CSV_ERRORS',
                {'assetPath' : assetPath});

    });


       app.get('/SIP/scenario1_11_company_SIP', function (req, res) {
      res.render('SIP/scenario1_11_company_SIP',
                {'assetPath' : assetPath});

    });

              app.get('/SIP/scenario3_1_What_SIP', function (req, res) {
      res.render('SIP/scenario3_1_What_SIP',
                {'assetPath' : assetPath});

    });

          app.get('/SIP/scenario3_2_Check_SIP', function (req, res) {
      res.render('SIP/scenario3_2_Check_SIP',
                {'assetPath' : assetPath});

    });

   app.get('/SIP/scenario3_3_Group_SIP', function (req, res) {
      res.render('SIP/scenario3_3_Group_SIP',
                {'assetPath' : assetPath});

    });

          app.get('/SIP/scenario3_4_Group_Details_SIP', function (req, res) {
      res.render('SIP/scenario3_4_Group_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP/scenario3_5_Group_Edit_SIP', function (req, res) {
      res.render('SIP/scenario3_5_Group_Edit_SIP',
                {'assetPath' : assetPath});

    });

         
             app.get('/SIP/scenario3_6_Trustee_Details_SIP', function (req, res) {
      res.render('SIP/scenario3_6_Trustee_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP/scenario3_7_Trustee_Edit_SIP', function (req, res) {
      res.render('SIP/scenario3_7_Trustee_Edit_SIP',
                {'assetPath' : assetPath});

    });



app.get('/SIP/scenario1_7_Alterations_SIP', function (req, res) {
      res.render('SIP/scenario1_7_Alterations_SIP',
                {'assetPath' : assetPath});

    });


app.get('/SIP/scenario3_9_Alterations_Check_SIP', function (req, res) {
      res.render('SIP/scenario3_9_Alterations_Check_SIP',
                {'assetPath' : assetPath});

    });



app.get('/SIP/scenario3_8_Alterations_SIP', function (req, res) {
      res.render('SIP/scenario3_8_Alterations_SIP',
                {'assetPath' : assetPath});

    });      

                app.get('/SIP/scenario3_9_Alterations_Check_SIP', function (req, res) {
      res.render('SIP/scenario3_9_Alterations_Check_SIP',
                {'assetPath' : assetPath});

    }); 

                app.get('/SIP/scenario3_10_Summary_SIP', function (req, res) {
      res.render('SIP/scenario3_10_Summary_SIP',
                {'assetPath' : assetPath});

    }); 


             app.get('/SIP/scenario3_11_Confirmation_SIP', function (req, res) {
      res.render('SIP/scenario3_11_Confirmation_SIP',
                {'assetPath' : assetPath});

    }); 


            app.get('/SIP/scenario1_17_upload_CSV', function (req, res) {
      res.render('SIP/scenario1_17_upload_CSV',
                {'assetPath' : assetPath});

    }); 


            app.get('/SIP/scenario1_17_upload_CSV', function (req, res) {
      res.render('SIP/scenario1_17_upload_CSV',
                {'assetPath' : assetPath});

    }); 



            app.get('/SIP/scenario1_7_Alterations_CSOP', function (req, res) {
      res.render('SIP/scenario1_7_Alterations_CSOP',
                {'assetPath' : assetPath});

    }); 


 app.get('/SIP/scenario1_14_csv_ods_SIP', function (req, res) {
      res.render('SIP/scenario1_14_csv_ods_SIP',
                {'assetPath' : assetPath});

    }); 


  app.get('/SIP/scenario1_11_add_company_SIP', function (req, res) {
      res.render('SIP/scenario1_19_add_company_details_SIP',
                {'assetPath' : assetPath});

    }); 





 



            app.get('/SIP/scenario1_14_csv_ods_SIP_ERRORS', function (req, res) {
      res.render('SIP/scenario1_14_csv_ods_SIP_ERRORS',
                {'assetPath' : assetPath});

    }); 


            app.get('/SIP/scenario1_15_ods_SIP', function (req, res) {
      res.render('SIP/scenario1_15_ods_SIP',
                {'assetPath' : assetPath});

    }); 

            app.get('/SIP/scenario1_15_ods_SIP_ERRORS', function (req, res) {
      res.render('SIP/scenario1_15_ods_SIP_ERRORS',
                {'assetPath' : assetPath});

    }); 

            app.get('/SIP/scenario1_2_Group_SIP', function (req, res) {
      res.render('SIP/scenario1_2_Group_SIP',
                {'assetPath' : assetPath});

    }); 

            app.get('/SIP/scenario1_12_manual_csv_SIP', function (req, res) {
      res.render('SIP/scenario1_12_manual_csv_SIP',
                {'assetPath' : assetPath});

    });

app.get('/SIP/scenario1_19_add_company_details_SIP', function (req, res) {
      res.render('SIP/scenario1_19_add_company_details_SIP',
                {'assetPath' : assetPath});

    });



 // Alterations




app.get('/ALT/current_version_page1', function (req, res) {
      res.render('ALT/current_version_page1',
                {'assetPath' : assetPath});

    });

app.get('/ALT/current_version_page2', function (req, res) {
      res.render('ALT/current_version_page2',
                {'assetPath' : assetPath});

    });




app.get('/ALT/reworded_version_page1', function (req, res) {
      res.render('ALT/reworded_version_page1',
                {'assetPath' : assetPath});

    });


app.get('/ALT/reworded_version_page2', function (req, res) {
      res.render('ALT/reworded_version_page2',
                {'assetPath' : assetPath});

    });





app.get('/ALT/merged_version_page1', function (req, res) {
      res.render('ALT/merged_version_page1',
                {'assetPath' : assetPath});

    });


app.get('/ALT/merged_version_page', function (req, res) {
      res.render('ALT/merged_version_page',
                {'assetPath' : assetPath});

    });


app.get('/ALT/merged_version_page_version_2', function (req, res) {
      res.render('ALT/merged_version_page_version_2',
                {'assetPath' : assetPath});

    });

app.get('/ALT/merged_version_page_version_1', function (req, res) {
      res.render('ALT/merged_version_page_version_1',
                {'assetPath' : assetPath});

    });


 // CSOP save for later demo


    app.get('/CSOP_save_for_later_demo/01_CSOP_application_start', function (req, res) {
      res.render('CSOP_save_for_later_demo/01_CSOP_application_start',
                {'assetPath' : assetPath});

    });


     app.get('/CSOP_save_for_later_demo/02_CSOP_scheme_flow_start', function (req, res) {
      res.render('CSOP_save_for_later_demo/02_CSOP_scheme_flow_start',
                {'assetPath' : assetPath});

    });


     app.get('/CSOP_save_for_later_demo/03_CSOP_scheme_organiser', function (req, res) {
      res.render('CSOP_save_for_later_demo/03_CSOP_scheme_organiser',
                {'assetPath' : assetPath});

    });


    app.get('/CSOP_save_for_later_demo/04_CSOP_modal_box', function (req, res) {
      res.render('CSOP_save_for_later_demo/04_CSOP_modal_box',
                {'assetPath' : assetPath});

    });


    app.get('/CSOP_save_for_later_demo/05_CSOP_group_schemes_flow_exit', function (req, res) {
      res.render('CSOP_save_for_later_demo/05_CSOP_group_schemes_flow_exit',
                {'assetPath' : assetPath});

    });


    app.get('/CSOP_save_for_later_demo/06_CSOP_login_government_gateway', function (req, res) {
      res.render('CSOP_save_for_later_demo/06_CSOP_login_government_gateway',
                {'assetPath' : assetPath});

    });

    app.get('/CSOP_save_for_later_demo/07_CSOP_application_continue', function (req, res) {
      res.render('CSOP_save_for_later_demo/07_CSOP_application_continue',
                {'assetPath' : assetPath});

    });

     app.get('/CSOP_save_for_later_demo/08_CSOP_scheme_organiser_continue', function (req, res) {
      res.render('CSOP_save_for_later_demo/08_CSOP_scheme_organiser_continue',
                {'assetPath' : assetPath});

    });



     app.get('/CSOP_save_for_later_demo/A_CSOP_login_government_gateway_no_saved', function (req, res) {
      res.render('CSOP_save_for_later_demo/A_CSOP_login_government_gateway_no_saved',
                {'assetPath' : assetPath});

    });


      app.get('/CSOP_save_for_later_demo/B_CSOP_application_start_no_saved', function (req, res) {
      res.render('CSOP_save_for_later_demo/B_CSOP_application_start_no_saved',
                {'assetPath' : assetPath});

    });


      app.get('/CSOP_save_for_later_demo/C_CSOP_no_saved_application', function (req, res) {
      res.render('CSOP_save_for_later_demo/C_CSOP_no_saved_application',
                {'assetPath' : assetPath});

    });


      app.get('/CSOP_save_for_later_demo/09_CSOP_csv_ods', function (req, res) {
      res.render('CSOP_save_for_later_demo/09_CSOP_csv_ods',
                {'assetPath' : assetPath});

    });


      app.get('/CSOP_save_for_later_demo/10_CSOP_csv', function (req, res) {
      res.render('CSOP_save_for_later_demo/10_CSOP_csv',
                {'assetPath' : assetPath});

    });


      app.get('/CSOP_save_for_later_demo/11_CSOP_ods', function (req, res) {
      res.render('CSOP_save_for_later_demo/11_CSOP_ods',
                {'assetPath' : assetPath});

    });

      app.get('/CSOP_save_for_later_demo/07_CSOP_application_start_no_saved', function (req, res) {
      res.render('CSOP_save_for_later_demo/07_CSOP_application_start_no_saved',
                {'assetPath' : assetPath});

    });


       app.get('/CSOP_save_for_later_demo/Saved_page_1', function (req, res) {
      res.render('CSOP_save_for_later_demo/Saved_page_1',
                {'assetPath' : assetPath});

    });


 app.get('/CSOP_save_for_later_demo/Saved_page_2', function (req, res) {
      res.render('CSOP_save_for_later_demo/Saved_page_2',
                {'assetPath' : assetPath});

    });

 app.get('/CSOP_save_for_later_demo/Saved_page_3', function (req, res) {
      res.render('CSOP_save_for_later_demo/Saved_page_3',
                {'assetPath' : assetPath});

    });

 app.get('/CSOP_save_for_later_demo/Saved_page_4', function (req, res) {
      res.render('CSOP_save_for_later_demo/Saved_page_4',
                {'assetPath' : assetPath});

    });

 app.get('/CSOP_save_for_later_demo/Saved_page_5', function (req, res) {
      res.render('CSOP_save_for_later_demo/Saved_page_5',
                {'assetPath' : assetPath});

    });


  app.get('/CSOP_save_for_later_demo/Saved_page_6', function (req, res) {
      res.render('CSOP_save_for_later_demo/Saved_page_6',
                {'assetPath' : assetPath});

    });


    app.get('/CSOP_save_for_later_demo/Saved_page_7', function (req, res) {
      res.render('CSOP_save_for_later_demo/Saved_page_7',
                {'assetPath' : assetPath});

    });


      


       app.get('/CSOP_save_for_later_demo/Not_saved_page_1', function (req, res) {
      res.render('CSOP_save_for_later_demo/Not_saved_page_1',
                {'assetPath' : assetPath});

    });


 app.get('/CSOP_save_for_later_demo/Not_saved_page_2', function (req, res) {
      res.render('CSOP_save_for_later_demo/Not_saved_page_2',
                {'assetPath' : assetPath});

    });

 app.get('/CSOP_save_for_later_demo/Not_saved_page_3', function (req, res) {
      res.render('CSOP_save_for_later_demo/Not_saved_page_3',
                {'assetPath' : assetPath});

    });

 app.get('/CSOP_save_for_later_demo/Not_saved_page_4', function (req, res) {
      res.render('CSOP_save_for_later_demo/Not_saved_page_4',
                {'assetPath' : assetPath});

    });

 app.get('/CSOP_save_for_later_demo/Not_saved_page_5', function (req, res) {
      res.render('CSOP_save_for_later_demo/Not_saved_page_5',
                {'assetPath' : assetPath});

    });


  app.get('/CSOP_save_for_later_demo/Not_saved_page_6', function (req, res) {
      res.render('CSOP_save_for_later_demo/Not_saved_page_6',
                {'assetPath' : assetPath});

    });


    app.get('/CSOP_save_for_later_demo/Not_saved_page_7', function (req, res) {
      res.render('CSOP_save_for_later_demo/Not_saved_page_7',
                {'assetPath' : assetPath});

    });


    // CSOP End of Year Return Scenario 3

       app.get('/CSOP_save_for_later_demo/scenario1_0_Start_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_0_Start_CSOP',
                {'assetPath' : assetPath});

    });

       app.get('/CSOP_save_for_later_demo/CSOP_errors_scenario2_4', function (req, res) {
      res.render('CSOP_save_for_later_demo/CSOP_errors_scenario2_4',
                {'assetPath' : assetPath});

    });


       app.get('/CSOP_save_for_later_demo/CSOP_errors_scenario2_4', function (req, res) {
      res.render('CSOP_save_for_later_demo/CSOP_errors_scenario2_4',
                {'assetPath' : assetPath});

    });



        app.get('/CSOP_save_for_later_demo/scenario1_0_Start_CSOP_ERRORS', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_0_Start_CSOP_ERRORS',
                {'assetPath' : assetPath});

    });

        app.get('/CSOP_save_for_later_demo/scenario1_13_company_details_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_13_company_details_CSOP',
                {'assetPath' : assetPath});

    });

        app.get('/CSOP_save_for_later_demo/scenario1_16_CSOP_company_summary', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_16_CSOP_company_summary',
                {'assetPath' : assetPath});

    });


      app.get('/CSOP_save_for_later_demo/scenario1_17_upload_CSOP_CSV', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_17_upload_CSOP_CSV',
                {'assetPath' : assetPath});

    });


       app.get('/CSOP_save_for_later_demo/scenario1_1_What_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_1_What_CSOP',
                {'assetPath' : assetPath});

    });



       app.get('/CSOP_save_for_later_demo/scenario1_1_What_CSOP_ERRORS', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_1_What_CSOP_ERRORS',
                {'assetPath' : assetPath});

    });


      app.get('/CSOP_save_for_later_demo/scenario1_18_upload_CSOP_CSV', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_18_upload_CSOP_CSV',
                {'assetPath' : assetPath});

    });


app.get('/CSOP_save_for_later_demo/scenario1_18_upload_CSOP_CSV_ERRORS', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_18_upload_CSOP_CSV_ERRORS',
                {'assetPath' : assetPath});

    });


       app.get('/CSOP_save_for_later_demo/scenario1_11_company_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_11_company_CSOP',
                {'assetPath' : assetPath});

    });



 app.get('/CSOP_save_for_later_demo/CSOP_errors_scenario2_5', function (req, res) {
      res.render('CSOP_save_for_later_demo/CSOP_errors_scenario2_5',
                {'assetPath' : assetPath});

    });


       

              app.get('/CSOP_save_for_later_demo/scenario3_1_What_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_1_What_CSOP',
                {'assetPath' : assetPath});

    });

          app.get('/CSOP/scenario3_2_Check_CSOP', function (req, res) {
      res.render('CSOP/scenario3_2_Check_CSOP',
                {'assetPath' : assetPath});

    });

   app.get('/CSOP_save_for_later_demo/scenario3_3_Group_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_3_Group_CSOP',
                {'assetPath' : assetPath});

    });

          app.get('/CSOP_save_for_later_demo/scenario3_4_Group_Details_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_4_Group_Details_CSOP',
                {'assetPath' : assetPath});

    });

            app.get('/CSOP_save_for_later_demo/scenario3_5_Group_Edit_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_5_Group_Edit_CSOP',
                {'assetPath' : assetPath});

    });

         
             app.get('/CSOP_save_for_later_demo/scenario3_6_Trustee_Details_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_6_Trustee_Details_CSOP',
                {'assetPath' : assetPath});

    });

            app.get('/CSOP_save_for_later_demo/scenario3_7_Trustee_Edit_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_7_Trustee_Edit_CSOP',
                {'assetPath' : assetPath});

    });

app.get('/CSOP_save_for_later_demo/scenario3_8_Alterations_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_8_Alterations_CSOP',
                {'assetPath' : assetPath});

    });      

                app.get('/CSOP_save_for_later_demo/scenario3_9_Alterations_Check_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_9_Alterations_Check_CSOP',
                {'assetPath' : assetPath});

    }); 


                app.get('/CSOP_save_for_later_demo/scenario2_4_Errors_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario2_4_Errors_CSOP',
                {'assetPath' : assetPath});

    }); 


                app.get('/CSOP_save_for_later_demo/scenario3_10_Summary_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_10_Summary_CSOP',
                {'assetPath' : assetPath});

    }); 


             app.get('/CSOP_save_for_later_demo/scenario3_11_Confirmation_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_11_Confirmation_CSOP',
                {'assetPath' : assetPath});

    }); 


            app.get('/CSOP_save_for_later_demo/scenario1_17_upload_CSV', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_17_upload_CSV',
                {'assetPath' : assetPath});

    }); 


            app.get('/CSOP_save_for_later_demo/scenario1_17_upload_CSV', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_17_upload_CSV',
                {'assetPath' : assetPath});

    }); 



            app.get('/CSOP_save_for_later_demo/scenario1_7_Alterations_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_7_Alterations_CSOP',
                {'assetPath' : assetPath});

    }); 


 app.get('/CSOP_save_for_later_demo/scenario1_14_csv_ods_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_14_csv_ods_CSOP',
                {'assetPath' : assetPath});

    }); 



            app.get('/CSOP_save_for_later_demo/scenario1_14_csv_ods_CSOP_ERRORS', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_14_csv_ods_CSOP_ERRORS',
                {'assetPath' : assetPath});

    }); 


            app.get('/CSOP_save_for_later_demo/scenario1_15_ods_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_15_ods_CSOP',
                {'assetPath' : assetPath});

    }); 

            app.get('/CSOP_save_for_later_demo/scenario1_15_ods_CSOP_ERRORS', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_15_ods_CSOP_ERRORS',
                {'assetPath' : assetPath});

    }); 

            app.get('/CSOP_save_for_later_demo/scenario1_2_Group_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_2_Group_CSOP',
                {'assetPath' : assetPath});

    }); 

            app.get('/CSOP_save_for_later_demo/scenario1_12_manual_csv_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_12_manual_csv_CSOP',
                {'assetPath' : assetPath});

    }); 


            app.get('/CSOP_save_for_later_demo/scenario2_5_Errors_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario2_5_Errors_CSOP',
                {'assetPath' : assetPath});

    }); 
      

        app.get('/CSOP_save_for_later_demo/testflow_company_summary', function (req, res) {
      res.render('CSOP_save_for_later_demo/testflow_company_summary',
                {'assetPath' : assetPath});

    }); 
      

        app.get('/CSOP_save_for_later_demo/scenario1_20_CSOP_company_single_summary', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_20_CSOP_company_single_summary',
                {'assetPath' : assetPath});

    }); 




       app.get('/CSOP_save_for_later_demo/Not_saved_page_1', function (req, res) {
      res.render('CSOP_save_for_later_demo/Not_saved_page_1',
                {'assetPath' : assetPath});

    });


 app.get('/CSOP_save_for_later_demo/Not_saved_page_2', function (req, res) {
      res.render('CSOP_save_for_later_demo/Not_saved_page_2',
                {'assetPath' : assetPath});

    });

 app.get('/CSOP_save_for_later_demo/Not_saved_page_3', function (req, res) {
      res.render('CSOP_save_for_later_demo/Not_saved_page_3',
                {'assetPath' : assetPath});

    });

 app.get('/CSOP_save_for_later_demo/Not_saved_page_4', function (req, res) {
      res.render('CSOP_save_for_later_demo/Not_saved_page_4',
                {'assetPath' : assetPath});

    });

 app.get('/CSOP_save_for_later_demo/Not_saved_page_5', function (req, res) {
      res.render('CSOP_save_for_later_demo/Not_saved_page_5',
                {'assetPath' : assetPath});

    });


  app.get('/CSOP_save_for_later_demo/Not_saved_page_6', function (req, res) {
      res.render('CSOP_save_for_later_demo/Not_saved_page_6',
                {'assetPath' : assetPath});

    });


    app.get('/CSOP_save_for_later_demo/Not_saved_page_7', function (req, res) {
      res.render('CSOP_save_for_later_demo/Not_saved_page_7',
                {'assetPath' : assetPath});

    });


    // CSOP End of Year Return Scenario 3

       app.get('/CSOP_save_for_later_demo/scenario1_0_Start_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_0_Start_CSOP',
                {'assetPath' : assetPath});

    });

       app.get('/CSOP_save_for_later_demo/CSOP_errors_scenario2_4', function (req, res) {
      res.render('CSOP_save_for_later_demo/CSOP_errors_scenario2_4',
                {'assetPath' : assetPath});

    });


       app.get('/CSOP_save_for_later_demo/CSOP_errors_scenario2_4', function (req, res) {
      res.render('CSOP_save_for_later_demo/CSOP_errors_scenario2_4',
                {'assetPath' : assetPath});

    });



        app.get('/CSOP_save_for_later_demo/scenario1_0_Start_CSOP_ERRORS', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_0_Start_CSOP_ERRORS',
                {'assetPath' : assetPath});

    });

        app.get('/CSOP_save_for_later_demo/scenario1_13_company_details_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_13_company_details_CSOP',
                {'assetPath' : assetPath});

    });

        app.get('/CSOP_save_for_later_demo/scenario1_16_CSOP_company_summary', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_16_CSOP_company_summary',
                {'assetPath' : assetPath});

    });


      app.get('/CSOP_save_for_later_demo/scenario1_17_upload_CSOP_CSV', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_17_upload_CSOP_CSV',
                {'assetPath' : assetPath});

    });


       app.get('/CSOP_save_for_later_demo/scenario1_1_What_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_1_What_CSOP',
                {'assetPath' : assetPath});

    });



       app.get('/CSOP_save_for_later_demo/scenario1_1_What_CSOP_ERRORS', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_1_What_CSOP_ERRORS',
                {'assetPath' : assetPath});

    });


      app.get('/CSOP_save_for_later_demo/scenario1_18_upload_CSOP_CSV', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_18_upload_CSOP_CSV',
                {'assetPath' : assetPath});

    });


app.get('/CSOP_save_for_later_demo/scenario1_18_upload_CSOP_CSV_ERRORS', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_18_upload_CSOP_CSV_ERRORS',
                {'assetPath' : assetPath});

    });


       app.get('/CSOP_save_for_later_demo/scenario1_11_company_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_11_company_CSOP',
                {'assetPath' : assetPath});

    });



 app.get('/CSOP_save_for_later_demo/CSOP_errors_scenario2_5', function (req, res) {
      res.render('CSOP_save_for_later_demo/CSOP_errors_scenario2_5',
                {'assetPath' : assetPath});

    });


       

              app.get('/CSOP_save_for_later_demo/scenario3_1_What_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_1_What_CSOP',
                {'assetPath' : assetPath});

    });

          app.get('/CSOP/scenario3_2_Check_CSOP', function (req, res) {
      res.render('CSOP/scenario3_2_Check_CSOP',
                {'assetPath' : assetPath});

    });

   app.get('/CSOP_save_for_later_demo/scenario3_3_Group_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_3_Group_CSOP',
                {'assetPath' : assetPath});

    });

          app.get('/CSOP_save_for_later_demo/scenario3_4_Group_Details_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_4_Group_Details_CSOP',
                {'assetPath' : assetPath});

    });

            app.get('/CSOP_save_for_later_demo/scenario3_5_Group_Edit_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_5_Group_Edit_CSOP',
                {'assetPath' : assetPath});

    });

         
             app.get('/CSOP_save_for_later_demo/scenario3_6_Trustee_Details_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_6_Trustee_Details_CSOP',
                {'assetPath' : assetPath});

    });

            app.get('/CSOP_save_for_later_demo/scenario3_7_Trustee_Edit_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_7_Trustee_Edit_CSOP',
                {'assetPath' : assetPath});

    });

app.get('/CSOP_save_for_later_demo/scenario3_8_Alterations_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_8_Alterations_CSOP',
                {'assetPath' : assetPath});

    });      

                app.get('/CSOP_save_for_later_demo/scenario3_9_Alterations_Check_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_9_Alterations_Check_CSOP',
                {'assetPath' : assetPath});

    }); 


                app.get('/CSOP_save_for_later_demo/scenario2_4_Errors_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario2_4_Errors_CSOP',
                {'assetPath' : assetPath});

    }); 


                app.get('/CSOP_save_for_later_demo/scenario3_10_Summary_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_10_Summary_CSOP',
                {'assetPath' : assetPath});

    }); 


             app.get('/CSOP_save_for_later_demo/scenario3_11_Confirmation_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario3_11_Confirmation_CSOP',
                {'assetPath' : assetPath});

    }); 


            app.get('/CSOP_save_for_later_demo/scenario1_17_upload_CSV', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_17_upload_CSV',
                {'assetPath' : assetPath});

    }); 


            app.get('/CSOP_save_for_later_demo/scenario1_17_upload_CSV', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_17_upload_CSV',
                {'assetPath' : assetPath});

    }); 



            app.get('/CSOP_save_for_later_demo/scenario1_7_Alterations_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_7_Alterations_CSOP',
                {'assetPath' : assetPath});

    }); 


 app.get('/CSOP_save_for_later_demo/scenario1_14_csv_ods_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_14_csv_ods_CSOP',
                {'assetPath' : assetPath});

    }); 



            app.get('/CSOP_save_for_later_demo/scenario1_14_csv_ods_CSOP_ERRORS', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_14_csv_ods_CSOP_ERRORS',
                {'assetPath' : assetPath});

    }); 


            app.get('/CSOP_save_for_later_demo/scenario1_15_ods_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_15_ods_CSOP',
                {'assetPath' : assetPath});

    }); 

            app.get('/CSOP_save_for_later_demo/scenario1_15_ods_CSOP_ERRORS', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_15_ods_CSOP_ERRORS',
                {'assetPath' : assetPath});

    }); 

            app.get('/CSOP_save_for_later_demo/scenario1_2_Group_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_2_Group_CSOP',
                {'assetPath' : assetPath});

    }); 

            app.get('/CSOP_save_for_later_demo/scenario1_12_manual_csv_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_12_manual_csv_CSOP',
                {'assetPath' : assetPath});

    }); 


            app.get('/CSOP_save_for_later_demo/scenario2_5_Errors_CSOP', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario2_5_Errors_CSOP',
                {'assetPath' : assetPath});

    }); 
      

        app.get('/CSOP_save_for_later_demo/testflow_company_summary', function (req, res) {
      res.render('CSOP_save_for_later_demo/testflow_company_summary',
                {'assetPath' : assetPath});

    }); 
      

        app.get('/CSOP_save_for_later_demo/scenario1_20_CSOP_company_single_summary', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_20_CSOP_company_single_summary',
                {'assetPath' : assetPath});

    }); 


        app.get('/CSOP_save_for_later_demo/scenario1_20_CSOP_company_single_summary', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_20_CSOP_company_single_summary',
                {'assetPath' : assetPath});

    }); 
      
      



   

   


    


    








//Temporary COC files


    app.get('/TCCOC/COC_menu', function (req, res) {
      res.render('TCCOC/COC_menu',
                {'assetPath' : assetPath});

    });    




// CSOP save for later demo


    app.get('/New_summary_flow/01_CSOP_application_start', function (req, res) {
      res.render('New_summary_flow/01_CSOP_application_start',
                {'assetPath' : assetPath});

    });


     app.get('/New_summary_flow/02_CSOP_scheme_flow_start', function (req, res) {
      res.render('New_summary_flow/02_CSOP_scheme_flow_start',
                {'assetPath' : assetPath});

    });


     app.get('/New_summary_flow/03_CSOP_scheme_organiser', function (req, res) {
      res.render('New_summary_flow/03_CSOP_scheme_organiser',
                {'assetPath' : assetPath});

    });


    app.get('/New_summary_flow/04_CSOP_modal_box', function (req, res) {
      res.render('New_summary_flow/04_CSOP_modal_box',
                {'assetPath' : assetPath});

    });


    app.get('/New_summary_flow/05_CSOP_group_schemes_flow_exit', function (req, res) {
      res.render('New_summary_flow/05_CSOP_group_schemes_flow_exit',
                {'assetPath' : assetPath});

    });


    app.get('/New_summary_flow/06_CSOP_login_government_gateway', function (req, res) {
      res.render('New_summary_flow/06_CSOP_login_government_gateway',
                {'assetPath' : assetPath});

    });

    app.get('/New_summary_flow/07_CSOP_application_continue', function (req, res) {
      res.render('New_summary_flow/07_CSOP_application_continue',
                {'assetPath' : assetPath});

    });

     app.get('/New_summary_flow/08_CSOP_scheme_organiser_continue', function (req, res) {
      res.render('New_summary_flow/08_CSOP_scheme_organiser_continue',
                {'assetPath' : assetPath});

    });



     app.get('/New_summary_flow/A_CSOP_login_government_gateway_no_saved', function (req, res) {
      res.render('New_summary_flow/A_CSOP_login_government_gateway_no_saved',
                {'assetPath' : assetPath});

    });


      app.get('/New_summary_flow/B_CSOP_application_start_no_saved', function (req, res) {
      res.render('New_summary_flow/B_CSOP_application_start_no_saved',
                {'assetPath' : assetPath});

    });


      app.get('/New_summary_flow/C_CSOP_no_saved_application', function (req, res) {
      res.render('New_summary_flow/C_CSOP_no_saved_application',
                {'assetPath' : assetPath});

    });


      app.get('/New_summary_flow/09_CSOP_csv_ods', function (req, res) {
      res.render('New_summary_flow/09_CSOP_csv_ods',
                {'assetPath' : assetPath});

    });


      app.get('/New_summary_flow/10_CSOP_csv', function (req, res) {
      res.render('New_summary_flow/10_CSOP_csv',
                {'assetPath' : assetPath});

    });


      app.get('/New_summary_flow/11_CSOP_ods', function (req, res) {
      res.render('New_summary_flow/11_CSOP_ods',
                {'assetPath' : assetPath});

    });

      app.get('/New_summary_flow/07_CSOP_application_start_no_saved', function (req, res) {
      res.render('New_summary_flow/07_CSOP_application_start_no_saved',
                {'assetPath' : assetPath});

    });


       app.get('/New_summary_flow/Saved_page_1', function (req, res) {
      res.render('New_summary_flow/Saved_page_1',
                {'assetPath' : assetPath});

    });


 app.get('/New_summary_flow/Saved_page_2', function (req, res) {
      res.render('New_summary_flow/Saved_page_2',
                {'assetPath' : assetPath});

    });

 app.get('/New_summary_flow/Saved_page_3', function (req, res) {
      res.render('New_summary_flow/Saved_page_3',
                {'assetPath' : assetPath});

    });

 app.get('/New_summary_flow/Saved_page_4', function (req, res) {
      res.render('New_summary_flow/Saved_page_4',
                {'assetPath' : assetPath});

    });

 app.get('/New_summary_flow/Saved_page_5', function (req, res) {
      res.render('New_summary_flow/Saved_page_5',
                {'assetPath' : assetPath});

    });


  app.get('/New_summary_flow/Saved_page_6', function (req, res) {
      res.render('New_summary_flow/Saved_page_6',
                {'assetPath' : assetPath});

    });


    app.get('/New_summary_flow/Saved_page_7', function (req, res) {
      res.render('New_summary_flow/Saved_page_7',
                {'assetPath' : assetPath});

    });


      


       app.get('/New_summary_flow/Not_saved_page_1', function (req, res) {
      res.render('New_summary_flow/Not_saved_page_1',
                {'assetPath' : assetPath});

    });


 app.get('/New_summary_flow/Not_saved_page_2', function (req, res) {
      res.render('New_summary_flow/Not_saved_page_2',
                {'assetPath' : assetPath});

    });

 app.get('/New_summary_flow/Not_saved_page_3', function (req, res) {
      res.render('New_summary_flow/Not_saved_page_3',
                {'assetPath' : assetPath});

    });

 app.get('/New_summary_flow/Not_saved_page_4', function (req, res) {
      res.render('New_summary_flow/Not_saved_page_4',
                {'assetPath' : assetPath});

    });

 app.get('/New_summary_flow/Not_saved_page_5', function (req, res) {
      res.render('New_summary_flow/Not_saved_page_5',
                {'assetPath' : assetPath});

    });


  app.get('/New_summary_flow/Not_saved_page_6', function (req, res) {
      res.render('New_summary_flow/Not_saved_page_6',
                {'assetPath' : assetPath});

    });


    app.get('/New_summary_flow/Not_saved_page_7', function (req, res) {
      res.render('New_summary_flow/Not_saved_page_7',
                {'assetPath' : assetPath});

    });


    // CSOP End of Year Return Scenario 3

       app.get('/New_summary_flow/scenario1_0_Start_CSOP', function (req, res) {
      res.render('New_summary_flow/scenario1_0_Start_CSOP',
                {'assetPath' : assetPath});

    });

       app.get('/New_summary_flow/CSOP_errors_scenario2_4', function (req, res) {
      res.render('New_summary_flow/CSOP_errors_scenario2_4',
                {'assetPath' : assetPath});

    });


       app.get('/New_summary_flow/CSOP_errors_scenario2_4', function (req, res) {
      res.render('New_summary_flow/CSOP_errors_scenario2_4',
                {'assetPath' : assetPath});

    });



        app.get('/CSOP_save_for_later_demo/scenario1_0_Start_CSOP_ERRORS', function (req, res) {
      res.render('CSOP_save_for_later_demo/scenario1_0_Start_CSOP_ERRORS',
                {'assetPath' : assetPath});

    });


      app.get('/CSOP_save_for_later_demo/combined_data_table', function (req, res) {
      res.render('CSOP_save_for_later_demo/combined_data_table',
                {'assetPath' : assetPath});

    });



      app.get('/CSOP_save_for_later_demo/new_flow_01', function (req, res) {
      res.render('CSOP_save_for_later_demo/new_flow_01',
                {'assetPath' : assetPath});

    });


      app.get('/CSOP_save_for_later_demo/new_flow_02', function (req, res) {
      res.render('CSOP_save_for_later_demo/new_flow_02',
                {'assetPath' : assetPath});

    });


      app.get('/CSOP_save_for_later_demo/new_flow_03', function (req, res) {
      res.render('CSOP_save_for_later_demo/new_flow_03',
                {'assetPath' : assetPath});

    });

      app.get('/CSOP_save_for_later_demo/new_flow_04', function (req, res) {
      res.render('CSOP_save_for_later_demo/new_flow_04',
                {'assetPath' : assetPath});

    });


      app.get('/CSOP_save_for_later_demo/new_flow_05', function (req, res) {
      res.render('CSOP_save_for_later_demo/new_flow_05',
                {'assetPath' : assetPath});

    });


      app.get('/CSOP_save_for_later_demo/new_flow_06', function (req, res) {
      res.render('CSOP_save_for_later_demo/new_flow_06',
                {'assetPath' : assetPath});

    });


      app.get('/CSOP_save_for_later_demo/new_flow_07', function (req, res) {
      res.render('CSOP_save_for_later_demo/new_flow_07',
                {'assetPath' : assetPath});

    });


       app.get('/CSOP_save_for_later_demo/new_flow_08', function (req, res) {
      res.render('CSOP_save_for_later_demo/new_flow_08',
                {'assetPath' : assetPath});

    });


 app.get('/CSOP_save_for_later_demo/new_flow_09', function (req, res) {
      res.render('CSOP_save_for_later_demo/new_flow_09',
                {'assetPath' : assetPath});

    });


 app.get('/CSOP_save_for_later_demo/new_flow_10', function (req, res) {
      res.render('CSOP_save_for_later_demo/new_flow_10',
                {'assetPath' : assetPath});

    });


app.get('/CSOP_save_for_later_demo/new_flow_11', function (req, res) {
      res.render('CSOP_save_for_later_demo/new_flow_11',
                {'assetPath' : assetPath});

    });


app.get('/Prog_Ind_1/01_PICSOP_application_start', function (req, res) {
      res.render('Prog_Ind_1/01_PICSOP_application_start',
                {'assetPath' : assetPath});

    }); 


app.get('/Prog_Ind_1/01_PICSOP_application_start', function (req, res) {
      res.render('Prog_Ind_1/01_PICSOP_application_start',
                {'assetPath' : assetPath});

    }); 


app.get('/Prog_Ind_1/02_PICSOP_scheme_flow_start', function (req, res) {
      res.render('Prog_Ind_1/02_PICSOP_scheme_flow_start',
                {'assetPath' : assetPath});

    }); 


app.get('/Prog_Ind_1/03_PICSOP_scheme_organiser', function (req, res) {
      res.render('Prog_Ind_1/03_PICSOP_scheme_organiser',
                {'assetPath' : assetPath});

    }); 


app.get('/Prog_Ind_1/04_PICSOP_modal_box', function (req, res) {
      res.render('Prog_Ind_1/04_PICSOP_modal_box',
                {'assetPath' : assetPath});

    }); 


app.get('/Prog_Ind_1/05_PICSOP_group_schemes_flow_exit', function (req, res) {
      res.render('Prog_Ind_1/05_PICSOP_group_schemes_flow_exit',
                {'assetPath' : assetPath});

    }); 


app.get('/Prog_Ind_1/06_PICSOP_login_government_gateway', function (req, res) {
      res.render('Prog_Ind_1/06_PICSOP_login_government_gateway',
                {'assetPath' : assetPath});

    }); 


app.get('/Prog_Ind_1/07_PICSOP_application_continue', function (req, res) {
      res.render('Prog_Ind_1/07_PICSOP_application_continue',
                {'assetPath' : assetPath});

    }); 


app.get('/Prog_Ind_1/08_PICSOP_scheme_organiser_continue', function (req, res) {
      res.render('Prog_Ind_1/08_PICSOP_scheme_organiser_continue',
                {'assetPath' : assetPath});

    }); 


app.get('/Prog_Ind_1/09_PICSOP_csv_ods', function (req, res) {
      res.render('Prog_Ind_1/09_PICSOP_csv_ods',
                {'assetPath' : assetPath});

    }); 


app.get('/Prog_Ind_1/10_PICSOP_csv', function (req, res) {
      res.render('Prog_Ind_1/10_PICSOP_csv',
                {'assetPath' : assetPath});

    }); 


app.get('/Prog_Ind_1/11_PICSOP_ods', function (req, res) {
      res.render('Prog_Ind_1/11_PICSOP_ods',
                {'assetPath' : assetPath});

    }); 








// SIP 2
       app.get('/SIP_2/2scenario1_0_Start_SIP', function (req, res) {
      res.render('SIP_2/2scenario1_0_Start_SIP',
                {'assetPath' : assetPath});

    });

              app.get('/SIP_2/2scenario1_1_What_SIP', function (req, res) {
      res.render('SIP_2/2scenario1_1_What_SIP',
                {'assetPath' : assetPath});

    });


                      app.get('/SIP_2/2scenario1_14_csv_ods_SIP', function (req, res) {
      res.render('SIP_2/2scenario1_14_csv_ods_SIP',
                {'assetPath' : assetPath});

    });

                       app.get('/SIP_2/2scenario1_15_ods_SIP', function (req, res) {
      res.render('SIP_2/2scenario1_15_ods_SIP',
                {'assetPath' : assetPath});

    });

                       app.get('/SIP_2/2scenario1_16_group_company_summary', function (req, res) {
      res.render('SIP_2/2scenario1_16_group_company_summary',
                {'assetPath' : assetPath});

    });


              app.get('/SIP_2/2scenario1_12_manual_csv_SIP', function (req, res) {
      res.render('SIP_2/2scenario1_12_manual_csv_SIP',
                {'assetPath' : assetPath});

    });


              app.get('/SIP_2/2scenario1_13_company_details_SIP', function (req, res) {
      res.render('SIP_2/2scenario1_13_company_details_SIP',
                {'assetPath' : assetPath});

    });



             

              app.get('/SIP_2/test', function (req, res) {
      res.render('SIP_2/test',
                {'assetPath' : assetPath});

    });

                          app.get('/SIP_2/2scenario1_2_Group_SIP', function (req, res) {
      res.render('SIP_2/2scenario1_2_Group_SIP',
                {'assetPath' : assetPath});

    });

          app.get('/SIP_2/2scenario1_3_Group_Details_SIP', function (req, res) {
      res.render('SIP_2/2scenario1_3_Group_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP_2/2scenario1_4_Group_Edit_SIP', function (req, res) {
      res.render('SIP_2/2scenario1_4_Group_Edit_SIP',
                {'assetPath' : assetPath});

    });

         
             app.get('/SIP_2/2scenario1_5_Trustee_Details_SIP', function (req, res) {
      res.render('SIP_2/2scenario1_5_Trustee_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP_2/2scenario1_6_Trustee_Edit_SIP', function (req, res) {
      res.render('SIP_2/2scenario1_6_Trustee_Edit_SIP',
                {'assetPath' : assetPath});

    });

app.get('/SIP_2/2scenario1_7_Alterations_SIP', function (req, res) {
      res.render('SIP_2/2scenario1_7_Alterations_SIP',
                {'assetPath' : assetPath});

    });      

                app.get('/SIP_2/2scenario1_8_Alterations_Check_SIP', function (req, res) {
      res.render('SIP_2/2scenario1_8_Alterations_Check_SIP',
                {'assetPath' : assetPath});

    }); 

                app.get('/SIP_2/2scenario1_9_Summary_SIP', function (req, res) {
      res.render('SIP_2/2scenario1_9_Summary_SIP',
                {'assetPath' : assetPath});

    }); 


             app.get('/SIP_2/2scenario1_10_Confirmation_SIP', function (req, res) {
      res.render('SIP_2/2scenario1_10_Confirmation_SIP',
                {'assetPath' : assetPath});

    }); 


// SIP End of Year Return Scenario 2

       app.get('/SIP_2/2scenario2_0_Start_SIP', function (req, res) {
      res.render('SIP_2/2scenario2_0_Start_SIP',
                {'assetPath' : assetPath});

    });

              app.get('/SIP_2/2scenario2_1_What_SIP', function (req, res) {
      res.render('SIP_2/2scenario2_1_What_SIP',
                {'assetPath' : assetPath});

    });

               app.get('/SIP_2/2scenario2_2_Check_SIP', function (req, res) {
      res.render('SIP_2/2scenario2_2_Check_SIP',
                {'assetPath' : assetPath});

    });

                 app.get('/SIP/scenario2_3_Errors_SIP', function (req, res) {
      res.render('SIP/scenario2_3_Errors_SIP',
                {'assetPath' : assetPath});

    });

  app.get('/SIP_2/2scenario2_4_Errors_SIP', function (req, res) {
      res.render('SIP_2/2scenario2_4_Errors_SIP',
                {'assetPath' : assetPath});

    });


   

// SIP End of Year Return Scenario 3

       app.get('/SIP_2/2scenario3_0_Start_SIP', function (req, res) {
      res.render('SIP_2/2scenario3_0_Start_SIP',
                {'assetPath' : assetPath});

    });

       app.get('/SIP_2/2scenario1_11_company_SIP', function (req, res) {
      res.render('SIP_2/2scenario1_11_company_SIP',
                {'assetPath' : assetPath});

    });

              app.get('/SIP_2/2scenario3_1_What_SIP', function (req, res) {
      res.render('SIP_2/2scenario3_1_What_SIP',
                {'assetPath' : assetPath});

    });

          app.get('/SIP_2/scenario3_2_Check_SIP', function (req, res) {
      res.render('SIP_2/scenario3_2_Check_SIP',
                {'assetPath' : assetPath});



    });

   app.get('/SIP_2/2scenario3_3_Group_SIP', function (req, res) {
      res.render('SIP_2/2scenario3_3_Group_SIP',
                {'assetPath' : assetPath});

    });

          app.get('/SIP_2/2scenario3_4_Group_Details_SIP', function (req, res) {
      res.render('SIP_2/2scenario3_4_Group_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP_2/2scenario3_5_Group_Edit_SIP', function (req, res) {
      res.render('SIP_2/2scenario3_5_Group_Edit_SIP',
                {'assetPath' : assetPath});

    });

         
             app.get('/SIP_2/2scenario3_6_Trustee_Details_SIP', function (req, res) {
      res.render('SIP_2/2scenario3_6_Trustee_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP_2/2scenario3_7_Trustee_Edit_SIP', function (req, res) {
      res.render('SIP_2/2scenario3_7_Trustee_Edit_SIP',
                {'assetPath' : assetPath});

    });

app.get('/SIP_2/2scenario3_8_Alterations_SIP', function (req, res) {
      res.render('SIP_2/2scenario3_8_Alterations_SIP',
                {'assetPath' : assetPath});

    });      

                app.get('/SIP_2/2scenario3_9_Alterations_Check_SIP', function (req, res) {
      res.render('SIP_2/2scenario3_9_Alterations_Check_SIP',
                {'assetPath' : assetPath});

    }); 

                app.get('/SIP_2/2scenario3_10_Summary_SIP', function (req, res) {
      res.render('SIP_2/2scenario3_10_Summary_SIP',
                {'assetPath' : assetPath});

    }); 


             app.get('/SIP_2/2scenario3_11_Confirmation_SIP', function (req, res) {
      res.render('SIP_2/2scenario3_11_Confirmation_SIP',
                {'assetPath' : assetPath});

    }); 


app.get('/SIP_2/2scenario1_17_upload_CSV', function (req, res) {
      res.render('SIP_2/2scenario1_17_upload_CSV',
                {'assetPath' : assetPath});

    }); 

app.get('/SIP_2/2scenario1_11_company_SIP', function (req, res) {
      res.render('SIP_2/2scenario1_11_company_SIP',
                {'assetPath' : assetPath});

    }); 


app.get('/SIP_2/2scenario1_16_SIP_company_summary', function (req, res) {
      res.render('SIP_2/2scenario1_16_SIP_company_summary',
                {'assetPath' : assetPath});

    }); 

app.get('/SIP_2/2scenario1_17_upload_SIP_CSV', function (req, res) {
      res.render('SIP_2/2scenario1_17_upload_SIP_CSV',
                {'assetPath' : assetPath});

    }); 




// SIP 3
       app.get('/SIP_3/3scenario1_0_Start_SIP', function (req, res) {
      res.render('SIP_3/3scenario1_0_Start_SIP',
                {'assetPath' : assetPath});

    });

              app.get('/SIP_3/3scenario1_1_What_SIP', function (req, res) {
      res.render('SIP_3/3scenario1_1_What_SIP',
                {'assetPath' : assetPath});

    });


                      app.get('/SIP_3/3scenario1_14_csv_ods_SIP', function (req, res) {
      res.render('SIP_3/3scenario1_14_csv_ods_SIP',
                {'assetPath' : assetPath});

    });

                       app.get('/SIP_3/3scenario1_15_ods_SIP', function (req, res) {
      res.render('SIP_3/3scenario1_15_ods_SIP',
                {'assetPath' : assetPath});

    });

                       app.get('/SIP_3/3scenario1_16_group_company_summary', function (req, res) {
      res.render('SIP_3/3scenario1_16_group_company_summary',
                {'assetPath' : assetPath});

    });


              app.get('/SIP_3/3scenario1_12_manual_csv_SIP', function (req, res) {
      res.render('SIP_3/3scenario1_12_manual_csv_SIP',
                {'assetPath' : assetPath});

    });


              app.get('/SIP_3/3scenario1_13_company_details_SIP', function (req, res) {
      res.render('SIP_3/3scenario1_13_company_details_SIP',
                {'assetPath' : assetPath});

    });



             

              app.get('/SIP_3/test', function (req, res) {
      res.render('SIP_3/test',
                {'assetPath' : assetPath});

    });

                          app.get('/SIP_3/3scenario1_2_Group_SIP', function (req, res) {
      res.render('SIP_3/3scenario1_2_Group_SIP',
                {'assetPath' : assetPath});

    });

          app.get('/SIP_3/3scenario1_3_Group_Details_SIP', function (req, res) {
      res.render('SIP_3/3scenario1_3_Group_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP_3/3scenario1_4_Group_Edit_SIP', function (req, res) {
      res.render('SIP_3/3scenario1_4_Group_Edit_SIP',
                {'assetPath' : assetPath});

    });

         
             app.get('/SIP_3/3scenario1_5_Trustee_Details_SIP', function (req, res) {
      res.render('SIP_3/3scenario1_5_Trustee_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP_3/3scenario1_6_Trustee_Edit_SIP', function (req, res) {
      res.render('SIP_3/3scenario1_6_Trustee_Edit_SIP',
                {'assetPath' : assetPath});

    });

app.get('/SIP_3/3scenario1_7_Alterations_SIP', function (req, res) {
      res.render('SIP_3/3scenario1_7_Alterations_SIP',
                {'assetPath' : assetPath});

    });      

                app.get('/SIP_3/3scenario1_8_Alterations_Check_SIP', function (req, res) {
      res.render('SIP_3/3scenario1_8_Alterations_Check_SIP',
                {'assetPath' : assetPath});

    }); 

                app.get('/SIP_3/3scenario1_9_Summary_SIP', function (req, res) {
      res.render('SIP_3/3scenario1_9_Summary_SIP',
                {'assetPath' : assetPath});

    }); 


             app.get('/SIP_3/3scenario1_10_Confirmation_SIP', function (req, res) {
      res.render('SIP_3/3scenario1_10_Confirmation_SIP',
                {'assetPath' : assetPath});

    }); 


// SIP End of Year Return Scenario 2

       app.get('/SIP_3/3scenario2_0_Start_SIP', function (req, res) {
      res.render('SIP_3/3scenario2_0_Start_SIP',
                {'assetPath' : assetPath});

    });

              app.get('/SIP_3/3scenario2_1_What_SIP', function (req, res) {
      res.render('SIP_3/3scenario2_1_What_SIP',
                {'assetPath' : assetPath});

    });

               app.get('/SIP_3/3scenario2_2_Check_SIP', function (req, res) {
      res.render('SIP_3/3scenario2_2_Check_SIP',
                {'assetPath' : assetPath});

    });

                 app.get('/SIP/scenario2_3_Errors_SIP', function (req, res) {
      res.render('SIP/scenario2_3_Errors_SIP',
                {'assetPath' : assetPath});

    });

  app.get('/SIP_3/3scenario2_4_Errors_SIP', function (req, res) {
      res.render('SIP_3/3scenario2_4_Errors_SIP',
                {'assetPath' : assetPath});

    });


   

// SIP End of Year Return Scenario 3

       app.get('/SIP_3/3scenario3_0_Start_SIP', function (req, res) {
      res.render('SIP_3/3scenario3_0_Start_SIP',
                {'assetPath' : assetPath});

    });

       app.get('/SIP_3/3scenario1_11_company_SIP', function (req, res) {
      res.render('SIP_3/3scenario1_11_company_SIP',
                {'assetPath' : assetPath});

    });

              app.get('/SIP_3/3scenario3_1_What_SIP', function (req, res) {
      res.render('SIP_3/3scenario3_1_What_SIP',
                {'assetPath' : assetPath});

    });

          app.get('/SIP_3/scenario3_2_Check_SIP', function (req, res) {
      res.render('SIP_3/scenario3_2_Check_SIP',
                {'assetPath' : assetPath});



    });

   app.get('/SIP_3/3scenario3_3_Group_SIP', function (req, res) {
      res.render('SIP_3/3scenario3_3_Group_SIP',
                {'assetPath' : assetPath});

    });

          app.get('/SIP_3/3scenario3_4_Group_Details_SIP', function (req, res) {
      res.render('SIP_3/3scenario3_4_Group_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP_3/3scenario3_5_Group_Edit_SIP', function (req, res) {
      res.render('SIP_3/3scenario3_5_Group_Edit_SIP',
                {'assetPath' : assetPath});

    });

         
             app.get('/SIP_3/3scenario3_6_Trustee_Details_SIP', function (req, res) {
      res.render('SIP_3/3scenario3_6_Trustee_Details_SIP',
                {'assetPath' : assetPath});

    });

            app.get('/SIP_3/3scenario3_7_Trustee_Edit_SIP', function (req, res) {
      res.render('SIP_3/3scenario3_7_Trustee_Edit_SIP',
                {'assetPath' : assetPath});

    });

app.get('/SIP_3/3scenario3_8_Alterations_SIP', function (req, res) {
      res.render('SIP_3/3scenario3_8_Alterations_SIP',
                {'assetPath' : assetPath});

    });      

                app.get('/SIP_3/3scenario3_9_Alterations_Check_SIP', function (req, res) {
      res.render('SIP_3/3scenario3_9_Alterations_Check_SIP',
                {'assetPath' : assetPath});

    }); 

                app.get('/SIP_3/3scenario3_10_Summary_SIP', function (req, res) {
      res.render('SIP_3/3scenario3_10_Summary_SIP',
                {'assetPath' : assetPath});

    }); 


             app.get('/SIP_3/3scenario3_11_Confirmation_SIP', function (req, res) {
      res.render('SIP_3/3scenario3_11_Confirmation_SIP',
                {'assetPath' : assetPath});

    }); 


app.get('/SIP_3/3scenario1_17_upload_CSV', function (req, res) {
      res.render('SIP_3/3scenario1_17_upload_CSV',
                {'assetPath' : assetPath});

    }); 

app.get('/SIP_3/3scenario1_11_company_SIP', function (req, res) {
      res.render('SIP_3/3scenario1_11_company_SIP',
                {'assetPath' : assetPath});

    }); 


app.get('/SIP_3/3scenario1_16_SIP_company_summary', function (req, res) {
      res.render('SIP_3/3scenario1_16_SIP_company_summary',
                {'assetPath' : assetPath});

    }); 

app.get('/SIP_3/3scenario1_17_upload_SIP_CSV', function (req, res) {
      res.render('SIP_3/3scenario1_17_upload_SIP_CSV',
                {'assetPath' : assetPath});

    });


app.get('/SIP_3/3scenario1_20_SIP_company_single_summary', function (req, res) {
      res.render('SIP_3/3scenario1_20_SIP_company_single_summary',
                {'assetPath' : assetPath});

    });

app.get('/SIP_3/3scenario1_20_SIP_company_single_summary', function (req, res) {
      res.render('SIP_3/3scenario1_20_SIP_company_single_summary',
                {'assetPath' : assetPath});

    });

app.get('/SIP_3/304_SIP_modal_box', function (req, res) {
      res.render('SIP_3/304_SIP_modal_box',
                {'assetPath' : assetPath});

    });








            



    }
};
