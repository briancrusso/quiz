 $(document).ready(function() {
     var answer_log = [];
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
         answer_log.push(1);
         console.log(answer_log);
     });
     $('#say_hello').click(function() {
         answer_log.push(2);
         console.log(answer_log);
     });
     $('#quit_your_job').click(function() {
         answer_log.push(3);
         console.log(answer_log);
     });
     $('#head_to_lab').click(function() {
         answer_log.push(3);
     });
     $('#pray').click(function() {
         answer_log.push(2);
     });
     $('#hedonism').click(function() {
         answer_log.push(1);
     });
     $('#put_on_clothes').click(function() {
         answer_log.push(2);
     });
     $('#ace_test').click(function() {
         answer_log.push(3);
     });
     $('#grow_wings').click(function() {
         answer_log.push(1);
     });
     $('#dating_advise').click(function() {
         answer_log.push(1);
     });
     $('#regret_nothing').click(function() {
         answer_log.push(3);
     });
     $('#investment').click(function() {
         answer_log.push(2);
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
         if (answer_total <= 5) {
             $('#peanut_butter_jelly').show();
         } else if (answer_total >= 6 && answer_total <= 7) {
             $('#ham_cheese_croissant').show();
         } else if (answer_total >= 8 && answer_total <= 9) {
             $('#egg_salad_bagel').show();
         } else if (answer_total >= 10 && answer_total <= 11) {
             $('#foot_long_hero').show();
         } else if (answer_total === 12) {
             $('#nietzsche_sandwich').show();
         }
     });
 });
