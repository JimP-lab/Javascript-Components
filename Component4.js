			var arithmos1, arithmos2; 
			var MesosOros; 
			//αλλάξτε την τιμή της μεταβλητής arithmos1 και arithmos2 με άλλους  ακεραίους/δεκαδικούς 
			arithmos1 =10; 
			arithmos2 =1.23; 
			MesosOros = calculateAverage(arithmos1,arithmos2);
			document.write("ΜΟ=:" + MesosOros); window.alert(MesosOros); console.log(MesosOros); 

			function calculateAverage(arithmos1, arithmos2) 
			{ 
				return (arithmos1 + arithmos2) / 2; 
			}
