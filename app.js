 var answer_log = [];

 $(document).ready(function() {
             /*taking you through the different questions*/
             $('.btn').click(function() {
                 $('#intro').hide();
                 $('#high_school_friend').show();
             });
             $('.high_school_friend_answer').click(function() {
                 $('#high_school_friend').hide();
                 $('#head_explode').show();
             });
             $('.head_explode_answer').click(function() {
                 $('#head_explode').hide();
                 $('#naked_math').show();
             });
             $('.naked_math_answer').click(function() {
                 $('#naked_math').hide();
                 $('#time_travel').show();
             });
             /*logging values for the answers*/
             $('#avoid_eye_contact').click(function() {
                 answer_log.push(0);
                 console.log(answer_log);
             });
             $('#say_hello').click(function() {
                 answer_log.push(0);
                 console.log(answer_log);
             });
             $('#quit_your_job').click(function() {
                 answer_log.push(1);
                 console.log(answer_log);
             });
             $('#head_to_lab').click(function() {
                 answer_log.push(0);
                 console.log(answer_log);
             });
             $('#pray').click(function() {
                 answer_log.push(0);
                 console.log(answer_log);
             });
             $('#hedonism').click(function() {
                 answer_log.push(1);
                 console.log(answer_log);
             });
             $('#put_on_clothes').click(function() {
                 answer_log.push(0);
                 console.log(answer_log);
             });
             $('#ace_test').click(function() {
                 answer_log.push(0);
                 console.log(answer_log);
             });
             $('#grow_wings').click(function() {
                 answer_log.push(1);
                 console.log(answer_log);
             });
             $('#dating_advise').click(function() {
                 answer_log.push(0);
                 console.log(answer_log);
             });
             $('#regret_nothing').click(function() {
                 answer_log.push(0);
                 console.log(answer_log);
             });
             $('#investment').click(function() {
                 answer_log.push(1);
                 console.log(answer_log);
             });
             /*function to show the answer*/
             $('.time_travel_answer').click(function() {
                 $('#time_travel').hide();
                 /*-Trying to find the sum of the array-*/
                 var answer_total = 0;
                 for (var i = 0; i < answer_log.length; i++) {
                     answer_total += answer_log[i];
                 }
                 console.log(answer_total);
                 if (answer_log[0] === 1 && answer_total === 1) {
                 	$('#peanut_butter_jelly').show();
                 }
                 else if (answer_log[1] === 1 && answer_total === 1) {
                 	$('#ham_cheese_croissant').show();
                 }
                 else if (answer_log[2] === 1 && answer_total === 1) {
                 	$('#egg_salad_bagel').show();
                 }
                  else if (answer_log[3] === 1 && answer_total === 1) {
                 	$('#foot_long_hero').show();
                 }
                   else if (answer_total >= 2) {
                 	$('#several_sandwiches').show();
                 }
                   else {
                 	$('#not_a_sandwhich').show();
                 }
            });
});

