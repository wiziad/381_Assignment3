// Group Members:
// Ziad Hamed
// Ethan Klassan

document.addEventListener('DOMContentLoaded', function() {
    const pendingCourses = document.querySelectorAll('.Pending table.cv td div');
    const enrolledSection = document.querySelector('.Enrolled table.cv');

    //hover  
    const allCourseTiles = document.querySelectorAll('table.cv td div');
    allCourseTiles.forEach(tile => {
        tile.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#ffffff';
        });
        
        tile.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });

    //accept and decline 
    pendingCourses.forEach(course => {
        const acceptButton = course.querySelector('.accept');
        const declineButton = course.querySelector('.decline');
        
        acceptButton.addEventListener('click', function() {
            let lastRow = enrolledSection.querySelector('tr:last-child');
            
            const coursesInLastRow = lastRow.querySelectorAll('td').length;
            if (coursesInLastRow >= 3) {
                lastRow = document.createElement('tr');
                enrolledSection.appendChild(lastRow);
            }
            
            const newCell = document.createElement('td');
            
            const courseClone = course.cloneNode(true);
            
            courseClone.querySelector('.accept').remove();
            courseClone.querySelector('.decline').remove();
            
            const quizLink = document.createElement('a');
            quizLink.href = 'attempt_quiz.html';
            quizLink.textContent = 'Attempt Quiz';
            courseClone.appendChild(quizLink);
            
            const img = courseClone.querySelector('img');
            img.src = 'course1.jpg';
            img.alt = 'Course 1';
            
            newCell.appendChild(courseClone);
            lastRow.appendChild(newCell);
            
            course.parentElement.remove();
            
            const remainingPendingCourses = document.querySelectorAll('.Pending table.cv td');
            if (remainingPendingCourses.length === 0) {
                document.querySelector('.Pending').style.display = 'none';
            }
        });
        
        declineButton.addEventListener('click', function() {
            course.parentElement.remove();
            
            const remainingPendingCourses = document.querySelectorAll('.Pending table.cv td');
            if (remainingPendingCourses.length === 0) {
                document.querySelector('.Pending').style.display = 'none';
            }
        });
    });
}); 