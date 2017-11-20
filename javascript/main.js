var fn = ()=> { 
   alert(`Invalid data found!`);
} 

var fna = ()=> { 
   alert(`Please enter Name`);
} 

var ro = ()=> { 
   alert(`Please enter Roll no`);
} 

var st = ()=> { 
   alert(`Please enter Stream`);
} 

var pa = ()=> { 
   alert(`Please enter Passing Year`);
}   

function add_row()
{
	let new_fname=document.getElementById("firstname").value;
	let new_roll=document.getElementById("tel").value;
	let new_stream=document.getElementById("stream").value;
	let new_pass=document.getElementById("tell").value;
	
	if(new_fname.length==0)
	{
		fna();
		return false;
	}
	if(new_roll.length==0)
	{
		ro();
		return false;
	}
	if(new_stream.length==0)
	{
		st();
		return false;
	}
	if(new_pass.length==0)
	{
		pa();
		return false;
	}
	if(new_fname==0||new_roll==0||new_stream==0||new_pass==0)
	{
		fn();
		return false;
	}
	
	
	let table=document.getElementById("data_table");
	let table_len=(table.rows.length);
	let row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td><input type='checkbox' id='"+table_len+"' class='chk'></td><td id='fname_row"+table_len+"'>"+new_fname+"</td><td id='roll_row"+table_len+"'>"+new_roll+"</td><td id='stream_row"+table_len+"'>"+new_stream+"</td><td id='pass_row"+table_len+"'>"+new_pass+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='btn btn-info' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='btn btn-success' onclick='save_row("+table_len+")'> </td></tr>";

	document.getElementById("new_fname").value="";
	document.getElementById("new_roll").value="";
	document.getElementById("new_stream").value="";
	document.getElementById("new_pass").value="";
	return true;
}

function date()
{
	class date
	{
		dt()
		{
			var currentDate = new Date(),
			day = currentDate.getDate(),
			month = currentDate.getMonth() + 1,
			year = currentDate.getFullYear();
			document.getElementById('datetime').innerHTML = day + "/" + month + "/" + year;
		}
	}
	var ob=new date();
	ob.dt();
}

function edit_row(...no)
{
	 document.getElementById("edit_button"+no).style.display="inline";
	 document.getElementById("save_button"+no).style.display="inline";
		
	 let fname=document.getElementById("fname_row"+no);
	 let roll=document.getElementById("roll_row"+no);
	 let stream=document.getElementById("stream_row"+no);
	 let passout=document.getElementById("pass_row"+no);

	 let fname_data=fname.innerHTML;
	 let roll_data=roll.innerHTML;
	 let stream_data=stream.innerHTML;
	 let passout_data=passout.innerHTML;
		
	 fname.innerHTML="<input type='text' id='fname_text"+no+"' value='"+fname_data+"'>";
	 roll.innerHTML="<input type='text' id='roll_text"+no+"' value='"+roll_data+"'>";
	 stream.innerHTML="<input type='text' id='stream_text"+no+"' value='"+stream_data+"'>";
	 passout.innerHTML="<input type='text' id='passout_text"+no+"' value='"+passout_data+"'>";
}

function deletes()
{
	
	let table=document.getElementById("data_table");
	const table_len=(table.rows.length);
	let i;
	for(i=1;i<=100;i++)
	{
		if(document.getElementById("row"+i+""))
		{
			if(document.getElementById(i).checked)
			{
				document.getElementById("row"+i+"").outerHTML="";
			}
		}
	}
}

function save_row(...no)
{
	 let fname_val=document.getElementById("fname_text"+no).value;
	 let roll_val=document.getElementById("roll_text"+no).value;
	 let stream_val=document.getElementById("stream_text"+no).value;
	 let passout_val=document.getElementById("passout_text"+no).value;

	 document.getElementById("fname_row"+no).innerHTML=fname_val;
	 document.getElementById("roll_row"+no).innerHTML=roll_val;
	 document.getElementById("stream_row"+no).innerHTML=stream_val;
	 document.getElementById("pass_row"+no).innerHTML=passout_val;
	 document.getElementById("edit_button"+no).style.display="inline";
	 document.getElementById("save_button"+no).style.display="inline";
}



