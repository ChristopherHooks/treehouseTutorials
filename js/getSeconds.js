//Calc Seconds in a Year
 var secPerMin = 60;
 var minPerHour = 60;
 var hourPerDay = 24;
 var daysPerWeek = 7;
 var weeksPerYear = 52;

 var secondsPerDay = secPerMin * minPerHour * hourPerDay;
 var secondsPerWeek = secondsPerDay * daysPerWeek;
 var secondsPerYear = secondsPerWeek * weeksPerYear;

 console.log(secondsPerYear);

 var yearsAlive = 28;
 var secondsInLife = secondsPerYear * yearsAlive;

 document.write("I've been alive for more than " + secondsInLife + " seconds!");
