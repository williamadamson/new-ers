module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    // ERS CSOP
    app.post('/CSOP/reportable-events', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'Yes') {
            url = '/CSOP/choose-file-type';
        } else if (data['radio-group'] === 'No') {
            url = '/CSOP/add-scheme-organiser';
        } else {
            url = '';
        }
        res.redirect(url);
    });


    app.post('/CSOP/choose-file-type', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'csv') {
            url = '/CSOP/upload-file';
        } else if (data['radio-group'] === 'ods') {
            url = '/CSOP/upload-spreadsheet';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    app.post('/CSOP/group-schemes', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['nominee-agent'] === 'Yes') {
            url = '/CSOP/scheme-details';
        } else if (data['nominee-agent'] === 'No') {
            url = '/CSOP/scheme-alterations-variations';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    app.post('/CSOP/scheme-details', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'csv') {
            url = '/CSOP/upload-group-scheme-file';
        } else if (data['radio-group'] === 'manual') {
            url = '/CSOP/add-group-scheme-organiser';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    app.post('/CSOP/scenario3_8_Alterations_CSOP', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'Yes') {
            url = '/CSOP/scheme-alterations';
        } else if (data['radio-group'] === 'No') {
            url = '/CSOP/summary-check';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    app.post('/CSOP/scheme-alterations-variations', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'Yes') {
            url = '/CSOP/scheme-alterations';
        } else if (data['radio-group'] === 'No') {
            url = '/CSOP/summary-check';
        } else {
            url = '';
        }
        res.redirect(url);
    });


    // Errors CSOP
    app.post('/CSOP/errors/reportable-events', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'Yes') {
            url = '/CSOP/errors/choose-file-type';
        } else if (data['radio-group'] === 'No') {
            url = '';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    app.post('/CSOP/errors/choose-file-type', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'csv') {
            url = '/CSOP/errors/upload-file';
        } else if (data['radio-group'] === 'ods') {
            url = '/CSOP/errors/upload-spreadsheet';
        } else {
            url = '';
        }
        res.redirect(url);
    });


    // ERS SIP
    app.post('/SIP/reportable-events', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'Yes') {
            url = '/SIP/choose-file-type';
        } else if (data['radio-group'] === 'No') {
            url = '/SIP/company-details';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    app.post('/SIP/choose-file-type', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'csv') {
            url = '/SIP/upload-file';
        } else if (data['radio-group'] === 'ods') {
            url = '/SIP/upload-spreadsheet';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    app.post('/SIP/group-plans', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['nominee-agent'] === 'Yes') {
            url = '/SIP/group-plan-details';
        } else if (data['nominee-agent'] === 'No') {
            url = '/SIP/trustee-details';
        } else {
            url = '';
        }
        res.redirect(url);
    });


    app.post('/SIP/plan-alterations', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'Yes') {
            url = '/SIP/alterations-check';
        } else if (data['radio-group'] === 'No') {
            url = '/SIP/summary';
        } else {
            url = '';
        }
        res.redirect(url);
    });


    app.post('/SIP/group-plan-details', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'csv') {
            url = '/SIP/upload-group-plan';
        } else if (data['radio-group'] === 'manual') {
            url = '/SIP/group-plan-company-details';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    // Errors SIP
    app.post('/SIP/errors/reportable-events', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'Yes') {
            url = '/SIP/errors/choose-file-type';
        } else if (data['radio-group'] === 'No') {
            url = '';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    app.post('/SIP/errors/choose-file-type', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'csv') {
            url = '/SIP/errors/upload-file';
        } else if (data['radio-group'] === 'ods') {
            url = '/SIP/errors/upload-spreadsheet';
        } else {
            url = '';
        }
        res.redirect(url);
    });


    // ERS EMI
    app.post('/EMI/reportable-events', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'Yes') {
            url = '/EMI/choose-file-type';
        } else if (data['radio-group'] === 'No') {
            url = '/EMI/company-details';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    app.post('/EMI/qualifying-subsidiaries', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'Yes') {
            url = '/EMI/qualifying-company-details';
        } else if (data['radio-group'] === 'No') {
            url = '/EMI/summary';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    app.post('/EMI/choose-file-type', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'csv') {
            url = '/EMI/upload-file';
        } else if (data['radio-group'] === 'ods') {
            url = '/EMI/upload-spreadsheet';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    app.post('/EMI/qualifying-company-details', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'csv') {
            url = '/EMI/upload-subsidiary';
        } else if (data['radio-group'] === 'manual') {
            url = '/EMI/add-subsidiary-details';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    // EMI errors
    app.post('/EMI/errors/reportable-events', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'Yes') {
            url = '/EMI/errors/choose-file-type';
        } else if (data['radio-group'] === 'No') {
            url = '#';
        } else {
            url = '#';
        }
        res.redirect(url);
    });

    app.post('/EMI/errors/choose-file-type', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'csv') {
            url = '/EMI/errors/upload-file';
        } else if (data['radio-group'] === 'ods') {
            url = '/EMI/errors/upload-spreadsheet';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    // ERS SAYE
    app.post('/SAYE/reportable-events', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'Yes') {
            url = '/SAYE/choose-file-type';
        } else if (data['radio-group'] === 'No') {
            url = '/SAYE/add-scheme-organiser';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    app.post('/SAYE/group-schemes', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'Yes') {
            url = '/SAYE/group-scheme-details';
        } else if (data['radio-group'] === 'No') {
            url = '/SAYE/alterations';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    app.post('/SAYE/alterations', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'Yes') {
            url = '/SAYE/scenario3_9_Alterations_Check_SAYE';
        } else if (data['radio-group'] === 'No') {
            url = '/SAYE/summary';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    app.post('/SAYE/choose-file-type', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'csv') {
            url = '/SAYE/upload-files';
        } else if (data['radio-group'] === 'ods') {
            url = '/SAYE/upload-spreadsheet';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    app.post('/SAYE/group-scheme-details', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'csv') {
            url = '/SAYE/upload-group-scheme-details';
        } else if (data['radio-group'] === 'manual') {
            url = '/SAYE/add-company-details';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    // ERS OTHER
    app.post('/OTHER/reportable-events', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'Yes') {
            url = '/OTHER/choose-file-type';
        } else if (data['radio-group'] === 'No') {
            url = '/OTHER/company-details';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    app.post('/OTHER/choose-file-type', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'csv') {
            url = '/OTHER/upload-files';
        } else if (data['radio-group'] === 'ods') {
            url = '/OTHER/upload-spreadsheet';
        } else {
            url = '';
        }
        res.redirect(url);
    });


    app.post('/OTHER/companies-included', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'Yes') {
            url = '/OTHER/other-company-details';
        } else if (data['radio-group'] === 'No') {
            url = '/OTHER/summary';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    app.post('/OTHER/other-company-details', function (req, res) {
        postToSession(req, res);
        var data = req.body;
        var url;
        if (data['radio-group'] === 'csv') {
            url = '/OTHER/upload-company-details';
        } else if (data['radio-group'] === 'manual') {
            url = '/OTHER/add-company-details';
        } else {
            url = '';
        }
        res.redirect(url);
    });

    // Functions
    // Push posted form data into session
    function postToSession(req, res) {
        console.log("POST data:");
        console.log(req.body);

        var section = req.params.section,
        change      = req.params.change,
        data        = req.body,
        merged      = {};

        if ( typeof req.session.erspage[section] === "undefined" ) req.session.erspage[section] = {};
        if ( typeof req.session.erspage[section][change] === "undefined" ) req.session.erspage[section][change] = [];

        stringsToBoolean(data);

        if (typeof section === 'undefined') {
            console.log('Warning! Undefined Section: ' + req.url);
        }

        req.session.erspage.changes = true;
        req.session.erspage["has-" + section + "-changes"] = true;

        req.session.erspage[section][change] = new Array(data);
        addIndices(req.session.erspage[section][change]);

        console.log('\nSession Data for section: ' + section + ' and change: ' + change);
        console.log(req.session.erspage);
    }

    // Add and update index value to posted form data objects
    function addIndices(array) {
        for (var i = 0; i < array.length; i++) {
            array[i].index = i;
        }
    }

    // Merged from Employment
    function removeFromSession(req, res, value) {
        console.log(req.section.erspage);
        req.session.erspage[req.params.section];
    }

    // Convert boolean strings like 'true' and 'false' to actual boolean values
    function stringsToBoolean(object) {
        for (var prop in object) {
            if ( object[prop] == 'true' ) object[prop] = true;
            else if ( object[prop] == 'false' ) object[prop] = false;
        }
    }

    // Calcuate diff in years for something or other
    function dateDiffInYears (a, b) {
        var _MS_PER_DAY = 1000 * 60 * 60 * 24,
        utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate()),
        utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
        return Math.floor((utc2 - utc1) / _MS_PER_DAY)/365.25;
    }

    // Merge two js objects into one object
    function mergeObjects(obj1, obj2) {
        for (var p in obj2) {
            try {
                if ( obj2[p].constructor == Object ) {
                    obj1[p] = MergeRecursive(obj1[p], obj2[p]);
                } else {
                    obj1[p] = obj2[p];
                }
            } catch(e) {
                obj1[p] = obj2[p];
            }
        }
        return obj1;
    }

    function cleanSession(req) {
        console.log('\nClearing Session\n');
        req.session.erspage = {};
        req.session.login = {};
    }


  }
};