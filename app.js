$(document).ready(function() {
        $("#btn").click(function() {
            var integer = $("#num").val();
            let select = $("#currency1 option:selected").val();
            let select2 = $("#currency2 option:selected").val();
            var output = 0;
            if(integer == "") {
                $("#num").addClass("error");
            } else {
                $("#num").removeClass("error");
                if(select == "peso") {
                    if(select2 == "usd") {
                        output = integer * 0.019;
                    } else if(select2 == "euro") {
                        output = integer * 0.018;
                    } else if(select2 == "jpy") {
                        output = integer * 2.37;
                    } else if(select2 == "cad") {
                        output = integer * 0.024;
                    } else if(select2 == "aud") {
                        output = integer * 0.026;
                    } else if(select2 == "afn") {
                        output = integer * 1.72;
                    } else if(select2 == "bdt") {
                        output = integer * 1.68;
                    } else if(select2 == "khr") {
                        output = integer * 78.68;
                    } else {
                        output = integer 
                    }
                } else if(select == "usd") {
                    if(select2 == "peso") {
                        output = integer * 51.59;
                    } else if(select2 == "euro") {
                        output = integer * 0.90;
                    }  else if(select2 == "jpy") {
                        output = integer * 122.39;
                    } else if(select2 == "cad") {
                        output = integer * 1.25;
                    } else if(select2 == "aud") {
                        output = integer * 1.34;
                    } else if(select2 == "afn") {
                        output = integer * 88.93;
                    } else if(select2 == "bdt") {
                        output = integer * 86.42;
                    } else if(select2 == "khr") {
                        output = integer * 4059.35;
                    } else {
                        output = integer 
                    }
                } else if(select == "euro") {
                    if(select2 == "usd") {
                        output = integer * 1.11;
                    } else if(select2 == "peso") {
                        output = integer * 57.10;
                    } else if(select2 == "jpy") {
                        output = integer * 135.39;
                    } else if(select2 == "cad") {
                        output = integer * 1.38;
                    } else if(select2 == "aud") {
                        output = integer * 1.48;
                    } else if(select2 == "afn") {
                        output = integer * 98.43;
                    } else if(select2 == "bdt") {
                        output = integer * 95.66;
                    } else if(select2 == "khr") {
                        output = integer * 4,493.17;
                    } else {
                        output = integer 
                    }
                } else if(select == "jpy") {
                    if(select2 == "usd") {
                        output = integer * 0.0082;
                    } else if(select2 == "peso") {
                        output = integer * 0.42;
                    } else if(select2 == "euro") {
                        output = integer * 0.0074;
                    } else if(select2 == "cad") {
                        output = integer * 0.010;
                    } else if(select2 == "aud") {
                        output = integer * 0.011;
                    } else if(select2 == "afn") {
                        output = integer * 0.73;
                    } else if(select2 == "bdt") {
                        output = integer * 0.71;
                    } else if(select2 == "khr") {
                        output = integer * 33.18;
                    } else {
                        output = integer 
                    }
                } else if(select == "cad") {
                    if(select2 == "usd") {
                        output = integer * 0.80;
                    } else if(select2 == "peso") {
                        output = integer * 41.24;
                    } else if(select2 == "euro") {
                        output = integer * 0.72;
                    } else if(select2 == "jpy") {
                        output = integer * 97.79;
                    } else if(select2 == "aud") {
                        output = integer * 1.07;
                    } else if(select2 == "afn") {
                        output = integer * 71.09;
                    } else if(select2 == "bdt") {
                        output = integer * 69.09;
                    } else if(select2 == "khr") {
                        output = integer * 3244.84;
                    } else {
                        output = integer 
                    }
                }  else if(select == "aud") {
                    if(select2 == "usd") {
                        output = integer * 0.75;
                    } else if(select2 == "peso") {
                        output = integer * 38.57;
                    } else if(select2 == "euro") {
                        output = integer * 0.68;
                    } else if(select2 == "jpy") {
                        output = integer * 91.45;
                    } else if(select2 == "cad") {
                        output = integer * 0.94;
                    } else if(select2 == "afn") {
                        output = integer * 66.49;
                    } else if(select2 == "bdt") {
                        output = integer * 64.62;
                    } else if(select2 == "khr") {
                        output = integer * 3035.22;
                    } else {
                        output = integer 
                    }
                } else if(select == "afn") {
                    if(select2 == "usd") {
                        output = integer * 0.011;
                    } else if(select2 == "peso") {
                        output = integer * 0.58;
                    } else if(select2 == "euro") {
                        output = integer * 0.010;
                    } else if(select2 == "jpy") {
                        output = integer * 1.37;
                    } else if(select2 == "cad") {
                        output = integer * 0.014;
                    } else if(select2 == "aud") {
                        output = integer * 0.014;
                    } else if(select2 == "bdt") {
                        output = integer * 0.97;
                    } else if(select2 == "khr") {
                        output = integer * 45.65;
                    } else {
                        output = integer 
                    }
                } else if(select == "bdt") {
                    if(select2 == "usd") {
                        output = integer * 0.012;
                    } else if(select2 == "peso") {
                        output = integer * 0.60;
                    } else if(select2 == "euro") {
                        output = integer * 0.010;
                    } else if(select2 == "jpy") {
                        output = integer * 1.42;
                    } else if(select2 == "cad") {
                        output = integer * 0.014;
                    } else if(select2 == "aud") {
                        output = integer * 0.015;
                    } else if(select2 == "afn") {
                        output = integer * 1.03;
                    } else if(select2 == "khr") {
                        output = integer * 46.99;
                    } else {
                        output = integer 
                    }
                } else if(select == "khr") {
                    if(select2 == "usd") {
                        output = integer * 0.00025;
                    } else if(select2 == "peso") {
                        output = integer * 0.013;
                    } else if(select2 == "euro") {
                        output = integer * 0.00022;
                    } else if(select2 == "jpy") {
                        output = integer * 0.030;
                    } else if(select2 == "cad") {
                        output = integer * 0.00031;
                    } else if(select2 == "aud") {
                        output = integer * 0.00033;
                    } else if(select2 == "afn") {
                        output = integer * 0.022;
                    } else if(select2 == "bdt") {
                        output = integer * 0.021;
                    }  else {
                        output = integer 
                    }
                }
                $("#num2").val(output);
            }
        }
        );
    });