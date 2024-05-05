$("#formValidation").validate({

    rules: {
        name: { minlength: 4 },
        email: { required: true },
        number: {
            number: true,
            minlength: 10,
            maxlength: 10
        }
    },
    messages: {
        name: {
            required: 'This field is required',
            minlength: 'Minimum 4 character is required'
        },
        email: {
            required: 'This field is required',
            minlength: 'Minimum 4 character is required'
        },
        number: {
            required: 'This field is required',
            minlength: 'Enter valid 10 digit number'
        }
    },
});



/*
$(document).ready(() => {
    $("#formValidation").submit((e) => {
        e.preventDefault();
        

        // console.log("selected form  --", $("#formValidation"));
        // console.log("target ----------", e.target);
        // console.log("event -----------", e);

        $("#formValidation").validate({

            rules: {
                name: { minlength: 4 },
                email: { required: true },
                number: {
                    number: true,
                    minlength: 10,
                    maxlength: 10
                }
            },
            messages: {
                name: {
                    required: 'This field is required',
                    minlength: 'Minimum 4 charactor is requred'
                },
                email: {
                    required: 'This field is required',
                    minlength: 'Minimum 4 charactor is requred'
                },
                number: {
                    required: 'This field is required',
                    minlength: 'Enter valid 10 digit number'
                }
            },
        });

        const action = e.target.action;
        const FormData = $('#formValidation').serialize();

        console.log("action ",action );
        console.log("data : ",FormData);

        alert("");


        $.ajax({
            url:e.target.action,
            data: FormData,
            type:'get',
            success:function (outcome,success,xhr) {
                console.log("respond data is : ",typeof(outcome));
            },
            error:function(xhr, textSuccess, error){
                console.log("error is : ",error);
            }
        })

        console.log("after");


    })
})

*/