
/*1*/
$('#strength').mouseenter(function(){
    $(this).text('We excel in respectin your time and providing unmatched peace of mind,Our Commitment: Safeguarding Your Time and Delivering True Peace of Mind,Prioritizing Your Time, Protecting Your Peace')
    $(this).css('opacity','1')
    $(this).css('color','white')
    
});


$('#strength').mouseleave(function(){
    $(this).text('Our Strength Is in Valuing Your Time and Ensuring Your Peace of Mind')
    $(this).css('opacity','0.5')
    $(this).css('color','#62e70a')
    $(this).css('fontWeight','800')
    $(this).css('textAlign','center')

    
});


/*2*/
$('#urback').mouseenter(function(){
    $(this).text('We have Got Every Detail Handled for You,You are Covered from Every Angle,We have Thought of Everything, So You Don’t Have To,All Your Needs, Completely Covered.')
    $(this).css('opacity','1')
    $(this).css('color','white')
    
});


$('#urback').mouseleave(function(){
    $(this).text('We’ve Got You Covered in Every Aspect')
    $(this).css('opacity','0.5')
    $(this).css('color','#62e70a')
    $(this).css('fontWeight','800')
    $(this).css('textAlign','center')  
});

/*3*/

$('#teach').mouseenter(function(){
    $(this).text('We Believe in Transparent and Honest Communication,Our Commitment: Clear and Candid Communication,We Value Transparency and Integrity in Every Conversation,Straightforward and Honest Communication is Our Standard')
    $(this).css('opacity','1')
    $(this).css('color','white')
    
});


$('#teach').mouseleave(function(){
    $(this).text(' We Communicate Openly and Honestly')
    $(this).css('opacity','0.5')
    $(this).css('color','#62e70a')
    $(this).css('fontWeight','800')
    $(this).css('textAlign','center')  

});



/*4*/

$('#develop').mouseenter(function(){
    $(this).text('We Elevate Your Business to Reach Its Goals,Empowering Your Business to Achieve Success,Strategically Developing Your Business to Realize Your Ambitions')
    $(this).css('opacity','1')
    $(this).css('color','white')
    
});


$('#develop').mouseleave(function(){
    $(this).text(' We develop your buisness to achieve the goals')
    $(this).css('opacity','0.5')
    $(this).css('color','#62e70a')
    $(this).css('fontWeight','800')
    $(this).css('textAlign','center')  

});

/*section6*/
// Get all elements with the class 'clickable'
// Get all elements with the class 'clickable'
const clickableItems = document.querySelectorAll('.clickable');

// Add a click event listener to each clickable item
clickableItems.forEach(item => {
    item.addEventListener('click', function() {
        // Get the content from the data attributes
        const heading = this.getAttribute('data-heading');
        const paragraph = this.getAttribute('data-paragraph');
        const imageSrc = this.getAttribute('data-image');
        const item1 = this.getAttribute('data-item1');
        const item2 = this.getAttribute('data-item2');
        const item3 = this.getAttribute('data-item3');
        const item4 = this.getAttribute('data-item4');
        
        // Update the heading and paragraph in the middle column
        document.getElementById('headingDisplay').textContent = heading;
        document.getElementById('paragraphDisplay').textContent = paragraph;

        // Update the grid items in the middle column
        document.getElementById('item1Display').textContent = item1;
        document.getElementById('item2Display').textContent = item2;
        document.getElementById('item3Display').textContent = item3;
        document.getElementById('item4Display').textContent = item4;

        // Update the image in the right column
        document.getElementById('imageDisplay').src = imageSrc;
    });
});


/*section7 the counter*/

function rollValue(elementId,suffix1, startValue, endValue, suffix, speed) {
    const counter = document.getElementById(elementId);
    let currentValue = parseFloat(startValue) || 0;
    const endNumeric = parseFloat(endValue) || 0;
    
    const interval = setInterval(() => {
        const increment = Math.random() * (endNumeric - currentValue) * 0.1;
        currentValue = Math.min(currentValue + increment, endNumeric);
        
        if (suffix) {
            counter.innerText = suffix1+currentValue.toFixed(0) + suffix;
        } else {
            counter.innerText = currentValue.toFixed(0);
        }
        
        if (currentValue >= endNumeric) {
            clearInterval(interval);
        }
    }, speed);
}

// Initialize rolling effect for four values
rollValue("counter1","$", "0", "120", "M+", 50);  // From $0 to $120M+
rollValue("counter2","", "0", "25", "%", 70);    // From 0% to 25%
rollValue("counter3","", "0", "2", "M+", 60);    // From $0 to $2M+
rollValue("counter4","", "0", "359", "", 80);    // From 0 to 359
