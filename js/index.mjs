let password;
document.addEventListener("DOMContentLoaded", () =>
{
    document.getElementById('clear-btn')
        .addEventListener('click', () =>
    {
        document.getElementById('form').reset();
    });

    document.getElementById('name')
        .addEventListener('change', (e) =>
    {
        const nameFeedbackElement = document.getElementById('name-feedback');
        checkValidity(e.target, nameFeedbackElement);
    });

    document.getElementById('email')
        .addEventListener('change', (e) =>
    {
        const emailFeedbackElement = document.getElementById('email-feedback');
        checkValidity(e.target, emailFeedbackElement);
    });

    document.getElementById('age')
        .addEventListener('change', (e) =>
    {
        const ageFeedbackElement = document.getElementById('age-feedback');
        checkValidity(e.target, ageFeedbackElement);
    });

    document.getElementById('password')
        .addEventListener('change', (e) =>
    {
        password = document.getElementById('password').value;
        const passwordFeedbackElement = document.getElementById('password-feedback');
        checkValidity(e.target, passwordFeedbackElement);


        if(/\d/.test(password) === false)
        {
            console.log(e.target.validity.valid);
            passwordFeedbackElement.textContent = 'Password must contain at least one number.';
            passwordFeedbackElement.classList.add('invalid');
            passwordFeedbackElement.classList.remove('valid');
        }
        else
        {
            e.target.setCustomValidity("");
        }
    });

    document.getElementById('confirm-password')
        .addEventListener('change', (e) =>
    {
        if (document.getElementById('confirm-password').value !== password)
        {
            e.target.setCustomValidity("Passwords do not match");
        }
        else
        {
            e.target.setCustomValidity("");
        }
        const confirmPasswordFeedbackElement = document.getElementById('confirm-password-feedback');
        checkValidity(e.target, confirmPasswordFeedbackElement);
    });

    document.getElementById('gender')
        .addEventListener('change', (e) =>
    {
        const genderFeedbackElement = document.getElementById('gender-feedback');
        checkValidity(e.target, genderFeedbackElement);
    });

    document.getElementById('accept-terms')
        .addEventListener('change', (e) =>
    {
        const acceptedFeedbackElement = document.getElementById('accept-terms-feedback');
        checkValidity(e.target, acceptedFeedbackElement);
    });

    document.getElementById('form')
        .addEventListener('submit', (e) =>
    {
        e.preventDefault();
        // document.getElementById('form').preventDefault();
        console.log('form submitted');
        document.getElementById('sub-div').style.display = 'block';
        scrollTo(0, 0);
        e.target.reset();

    });

    document.getElementById('form')
        .addEventListener('reset', (e) =>
    {
        scrollTo(0, 0);
    })

});

function checkValidity(element, feedbackElement)
{
    if(element.validity.valid)
    {
        feedbackElement.textContent = '';
        feedbackElement.classList.add('valid');
        feedbackElement.classList.remove('invalid');
    }
    else
    {
        feedbackElement.textContent = element.validationMessage;
        feedbackElement.classList.add('invalid');
        feedbackElement.classList.remove('valid');
    }
}
