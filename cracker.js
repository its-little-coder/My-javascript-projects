let secretPassword = "cat";
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let attempts = 0;
let isCracked = false; // Ek switch, jab password mil jaye toh band kar denge

// Loop 1: Pehla letter (i)
for (let i = 0; i < alphabet.length; i++) {
    
    // Loop 2: Dusra letter (j)
    for (let j = 0; j < alphabet.length; j++) {
        
        // Loop 3: Teesra letter (k)
        for (let k = 0; k < alphabet.length; k++) {
            
            // 3 letters ko jodo
            let guess = alphabet[i] + alphabet[j] + alphabet[k];
            attempts++; // Har guess pe counter badhao

            // Check karo
            if (guess === secretPassword) {
                console.log("🚨 PASSWORD CRACKED! 🚨");
                console.log("Password tha: " + guess);
                console.log("Total attempts: " + attempts);
                
                isCracked = true; // Switch band kar do
                break; // Teesra loop roko
            }
        }
        if (isCracked) break; // Dusra loop roko
    }
    if (isCracked) break; // Pehla loop roko
}

if (!isCracked) {
    console.log("Password nahi mila!"); // Agar kabhi na mile toh
}
