<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="viewport" content="width=device-width,initial-scale=1, user-scalable=no" />
	<title>Uncle Ben`s American English</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<link rel='stylesheet' href="/todo/include/css/bootstrap.css" />
</head>
<body>
<div id="main">

	<header id="header" data-role="header" data-position="fixed"><!-- Header Start -->
		<blockquote>
            <p><a class="azubu" href="http://www.mystamptour.com/" target="_top"><img src="mainLogo.png" alt="Home"></a></p>
			<small>Practice English  !</small>
		</blockquote>
	</header><!-- Header End -->

	<nav id="gnb"><!-- gnb Start -->
		<ul>
            <li> <a href="/todo/index.php/main/sentences/?lv=1" class="btn btn-success">Sentences</a> 
                 <a href="/todo/index.php/main/rank/" class="btn btn-warning">Rank</a></li>
		</ul>
	</nav><!-- gnb End -->
	<article id="board_area">
		<header>
			<h1>Rank</h1>
		</header>
        <br />
        
        <h3>Rank </h3><br />
		<table cellspacing="0" cellpadding="0" class="table table-striped">
			<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Name</th>
					<th scope="col">CLV</th>
					<th scope="col">OLV</th>
					<th scope="col">gold</th>
				</tr>
			</thead>
			<tbody>
<?php
    foreach ($list as $lt)
    {
?>
            <tr>
    			<th scope="row">
    				<?php echo $lt->id;?>
    			</th>
    			<td><?php echo $lt->name;?></td>
    			<td><?php echo $lt->clv;?></td>
    			<td><?php echo $lt->olv;?></td>
    			<td><?php echo $lt->gold;?></td>
            </tr>
<?php
    }
?>
           <tr></tr>
	   	   </tbody>
			<tfoot>
				<tr>
					<th colspan="4">The end of the table</a></th>
				</tr>
			</tfoot>
		</table>
        <br /> * CLV : CLV is an abbreviation for class level. It indicates what level of class the student took. 
        <br /> * OLV : OLV is an abbreviation for odtained level. It indicates what level of test the student got through. 
        <br /> * Gold : Gold is a cyber money that students are able to obtain through passing tests. It can be redeemed. (1000 gold = 1000 Korean Won)
         
		<div><p></p></div>

	</article>

	<footer id="footer">
		<blockquote>
			<p><a class="azubu" href="http://www.unclebenenglish.com/" target="_top">Uncle Ben`s English </a></p>
			<small>Copyright by <em class="black"><a href="mailto:vdpa4me@gmail.com"> Benjamin Chang</a></small>
		<blockquote>
	</footer>

</div>

</body>
</html>