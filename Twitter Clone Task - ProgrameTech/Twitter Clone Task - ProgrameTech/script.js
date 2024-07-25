document.querySelector('.btn-primary.mt-2.float-right').addEventListener('click', function() {
    const tweetContent = document.querySelector('textarea.form-control').value;
    if (tweetContent.trim() === '') {
        alert('Please enter some text to tweet');
        return;
    }

    const tweetElement = document.createElement('div');
    tweetElement.className = 'card bg-dark text-white mb-3';
    tweetElement.innerHTML = `
        <div class="card-body">
            <p class="card-text">${tweetContent}</p>
        </div>
    `;
    
    document.getElementById('tweets').prepend(tweetElement);
    document.querySelector('textarea.form-control').value = '';
});
