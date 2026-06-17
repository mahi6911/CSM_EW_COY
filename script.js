 const form = document.getElementById('databaseForm');
    
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        // বাটন ডিজেবল করা যাতে ডাবল সাবমিট না হয়
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // আপনার SheetDB API URL (প্রয়োজনে এটি পরিবর্তন করতে পারেন)
        const sheetDbUrl = 'https://sheetdb.io/api/v1/srutbnmaqesw5';

        fetch(sheetDbUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [Object.fromEntries(new FormData(form))]
            })
        })
        .then(response => response.json())
        .then(data => {
            alert('Data successfully saved to Google Sheet!');
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Something went wrong. Please try again.');
        })
        .finally(() => {
            submitBtn.textContent = 'Submit';
            submitBtn.disabled = false;
        });
    });