<?php
                if(isset($_POST['submit'])) {
                        $size = $_POST['size'];

                        echo "<table border='1'>";
                        for($i=1; $i<=$size; $i++) {
                                echo "<tr>";
                                for($m=1; $m<=$size; $m++) {
                                        echo "<td>" . $i*$m . "</td>";
                                }
                                echo "</tr>";
                        }
                        echo "</table>";
                }
?>
