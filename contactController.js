Contact = require('./contactModel');

exports.index = (req,res)=>{

    Contact.get((err,contacts)=>{

        if(err){
            res.json({
                status: "error",
                message: err,
            });
        }

        res.json({
            status: "success",
            message: "Contacts retrived successfully!!!",
            data: contacts,
        });

    })
}

exports.new = (req, res) =>{
    var contact = new Contact();

    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    contact.save((err)=>{
        res.json({
            message: 'New contact created!',
            data: contact
        });
    });
}

exports.view = (req, res)=>{
    Contact.findById(req.params.contact_id, (err, contact)=>{
        if(err)
            res.send(err);
        
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    })
}

exports.update = (req, res)=>{

    Contact.findById(req.params.);
}