            // E
            // DE
            // CDE
            // BCDE
            // ABCDE 
            function pattern20(n) {
                for (let i = 0; i < n; i++) {
                    let row = ""
            
                    let char = 69;
                    for (let ch = char - i; ch <= char; ch++) {
                        row += String.fromCharCode(ch);
                    }
            
                    console.log(row);
                }
            }
            
            pattern20(5);  
            