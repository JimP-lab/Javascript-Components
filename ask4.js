<!DOCTYPE html> 
<html> 
	<head> 
		<title> Παραδειγμα 4 JS </title> 
		<meta charset="utf-8"> 
	</head> 
	<body> 
		<p>Παράδειγμα 4 χρήσης javascript!</p> 
		 <script> 
			var metavliti1;
			let metavliti2;
			var metavliti3;
			let $metavliti5, _metavliti6;
			metavliti1 = 1+2; // αφού δεν είναι σε "" ή '', ο τύπος θα είναι αριθμός
			metavliti2 = "2+3"; // αφού είναι σε "" είναι αλφαριθμητικό (κείμενο)
			metavliti3 = '3+4'; // αφού είναι σε '' είναι αλφαριθμητικό (κείμενο)
			$metavliti5 = 'ή κείμενο και αριθμούς 3,4...';// αφού είναι σε "" είναι κείμενο
			_metavliti6 = 11.12+3; // ή να κάνω πράξεις μεταξύ δεκαδικών 					         
			document.write(metavliti1); 
			window.alert(metavliti1); 
			console.log(metavliti1); 			
			document.write("<br>"); //νεα γραμμή
			document.write(metavliti2);
			window.alert(metavliti2);
			console.log(metavliti2);
			document.write("<br>"); //νεα γραμμή
			document.write(metavliti3); 
			window.alert(metavliti3); 
			console.log(metavliti3);
			document.write("<br>"); //νεα γραμμή
			document.write($metavliti5); 
			window.alert($metavliti5);
			console.log($metavliti5);
			document.write("<br>"); //νεα γραμμή
			document.write(_metavliti6);
			window.alert(_metavliti6);
			console.log(_metavliti6); 
		</script> 
	</body> 
</html> 
