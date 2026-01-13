// ============================================
// 1. LOCAL STORAGE FUNCTIONS
// ============================================

// localStorage.setItem(key, value) - Store data
function setLocalStorage() {
    const key = document.getElementById('localKey').value;
    const value = document.getElementById('localValue').value;
    
    if (!key || !value) {
        displayOutput('localOutput', '❌ Please enter both key and value!');
        return;
    }
    
    localStorage.setItem(key, value);
    displayOutput('localOutput', `✅ Stored: "${key}" = "${value}"\n\n💡 This data will persist even after closing the browser!`);
}

// localStorage.getItem(key) - Retrieve data
function getLocalStorage() {
    const key = document.getElementById('localKey').value;
    
    if (!key) {
        displayOutput('localOutput', '❌ Please enter a key to retrieve!');
        return;
    }
    
    const value = localStorage.getItem(key);
    
    if (value === null) {
        displayOutput('localOutput', `❌ No data found for key: "${key}"`);
    } else {
        displayOutput('localOutput', `✅ Retrieved: "${key}" = "${value}"`);
    }
}

// localStorage.removeItem(key) - Delete specific item
function removeLocalStorage() {
    const key = document.getElementById('localKey').value;
    
    if (!key) {
        displayOutput('localOutput', '❌ Please enter a key to remove!');
        return;
    }
    
    localStorage.removeItem(key);
    displayOutput('localOutput', `🗑️ Removed: "${key}"`);
}

// localStorage.clear() - Delete all data
function clearLocalStorage() {
    localStorage.clear();
    displayOutput('localOutput', '🗑️ All localStorage data cleared!');
}

// Display all localStorage items
function displayAllLocalStorage() {
    if (localStorage.length === 0) {
        displayOutput('localOutput', '📭 localStorage is empty!');
        return;
    }
    
    let output = `📦 localStorage contains ${localStorage.length} item(s):\n\n`;
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        output += `${i + 1}. "${key}" = "${value}"\n`;
    }
    
    displayOutput('localOutput', output);
}


// ============================================
// 2. SESSION STORAGE FUNCTIONS
// ============================================

// sessionStorage.setItem(key, value) - Store data for session
function setSessionStorage() {
    const key = document.getElementById('sessionKey').value;
    const value = document.getElementById('sessionValue').value;
    
    if (!key || !value) {
        displayOutput('sessionOutput', '❌ Please enter both key and value!');
        return;
    }
    
    sessionStorage.setItem(key, value);
    displayOutput('sessionOutput', `✅ Stored in session: "${key}" = "${value}"\n\n💡 This data will be cleared when you close this tab!`);
}

// sessionStorage.getItem(key) - Retrieve session data
function getSessionStorage() {
    const key = document.getElementById('sessionKey').value;
    
    if (!key) {
        displayOutput('sessionOutput', '❌ Please enter a key to retrieve!');
        return;
    }
    
    const value = sessionStorage.getItem(key);
    
    if (value === null) {
        displayOutput('sessionOutput', `❌ No data found for key: "${key}"`);
    } else {
        displayOutput('sessionOutput', `✅ Retrieved: "${key}" = "${value}"`);
    }
}

// sessionStorage.removeItem(key) - Delete specific item
function removeSessionStorage() {
    const key = document.getElementById('sessionKey').value;
    
    if (!key) {
        displayOutput('sessionOutput', '❌ Please enter a key to remove!');
        return;
    }
    
    sessionStorage.removeItem(key);
    displayOutput('sessionOutput', `🗑️ Removed: "${key}"`);
}

// sessionStorage.clear() - Delete all session data
function clearSessionStorage() {
    sessionStorage.clear();
    displayOutput('sessionOutput', '🗑️ All sessionStorage data cleared!');
}

// Display all sessionStorage items
function displayAllSessionStorage() {
    if (sessionStorage.length === 0) {
        displayOutput('sessionOutput', '📭 sessionStorage is empty!');
        return;
    }
    
    let output = `📦 sessionStorage contains ${sessionStorage.length} item(s):\n\n`;
    
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        const value = sessionStorage.getItem(key);
        output += `${i + 1}. "${key}" = "${value}"\n`;
    }
    
    displayOutput('sessionOutput', output);
}


// ============================================
// 3. COOKIE FUNCTIONS
// ============================================

// Create/Set a cookie with expiration
function setCookie() {
    const name = document.getElementById('cookieName').value;
    const value = document.getElementById('cookieValue').value;
    const days = document.getElementById('cookieDays').value || 7;
    
    if (!name || !value) {
        displayOutput('cookieOutput', '❌ Please enter both name and value!');
        return;
    }
    
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    
    document.cookie = `${name}=${value};${expires};path=/`;
    displayOutput('cookieOutput', `✅ Cookie set: "${name}" = "${value}"\n⏰ Expires in ${days} days\n\n💡 This cookie will be sent with every HTTP request!`);
}

// Get a cookie by name
function getCookie() {
    const name = document.getElementById('cookieName').value;
    
    if (!name) {
        displayOutput('cookieOutput', '❌ Please enter a cookie name!');
        return;
    }
    
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            const value = cookie.substring(nameEQ.length);
            displayOutput('cookieOutput', `✅ Cookie found: "${name}" = "${value}"`);
            return;
        }
    }
    
    displayOutput('cookieOutput', `❌ Cookie not found: "${name}"`);
}

// Delete a cookie by setting expiration to past
function deleteCookie() {
    const name = document.getElementById('cookieName').value;
    
    if (!name) {
        displayOutput('cookieOutput', '❌ Please enter a cookie name!');
        return;
    }
    
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    displayOutput('cookieOutput', `🗑️ Cookie deleted: "${name}"`);
}

// Display all cookies
function displayAllCookies() {
    const cookies = document.cookie;
    
    if (!cookies) {
        displayOutput('cookieOutput', '📭 No cookies found!');
        return;
    }
    
    const cookieArray = cookies.split(';');
    let output = `🍪 Found ${cookieArray.length} cookie(s):\n\n`;
    
    cookieArray.forEach((cookie, index) => {
        const trimmedCookie = cookie.trim();
        output += `${index + 1}. ${trimmedCookie}\n`;
    });
    
    displayOutput('cookieOutput', output);
}


// ============================================
// 4. PRACTICAL EXAMPLES
// ============================================

// Example 1: Save/Load Theme Preference (localStorage)
function saveTheme(theme) {
    localStorage.setItem('userTheme', theme);
    displayOutput('examplesOutput', `✅ Theme saved: ${theme}\n💡 Reload the page and call loadTheme() - it will remember!`);
}

function loadTheme() {
    const theme = localStorage.getItem('userTheme');
    if (theme) {
        displayOutput('examplesOutput', `🎨 Loaded theme: ${theme}\n💡 In a real app, you would apply this theme to the page!`);
    } else {
        displayOutput('examplesOutput', '❌ No theme saved yet!');
    }
}

// Example 2: Save/Load Form Data (sessionStorage)
function saveFormData() {
    const name = document.getElementById('formName').value;
    if (!name) {
        displayOutput('examplesOutput', '❌ Please enter a name first!');
        return;
    }
    sessionStorage.setItem('formName', name);
    displayOutput('examplesOutput', `✅ Form data saved: ${name}\n💡 Refresh the page - data will persist. But close the tab - it's gone!`);
}

function loadFormData() {
    const name = sessionStorage.getItem('formName');
    if (name) {
        document.getElementById('formName').value = name;
        displayOutput('examplesOutput', `✅ Form data loaded: ${name}`);
    } else {
        displayOutput('examplesOutput', '❌ No form data in session!');
    }
}

// Example 3: Remember Me Feature (Cookies)
function rememberUser() {
    const username = document.getElementById('loginUsername').value;
    if (!username) {
        displayOutput('examplesOutput', '❌ Please enter a username!');
        return;
    }
    
    const date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days
    const expires = "expires=" + date.toUTCString();
    
    document.cookie = `rememberedUser=${username};${expires};path=/`;
    displayOutput('examplesOutput', `✅ User remembered: ${username}\n💡 Close browser and come back - you'll still be remembered for 30 days!`);
}

function checkRememberedUser() {
    const nameEQ = "rememberedUser=";
    const cookies = document.cookie.split(';');
    
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.indexOf(nameEQ) === 0) {
            const username = cookie.substring(nameEQ.length);
            document.getElementById('loginUsername').value = username;
            displayOutput('examplesOutput', `✅ Welcome back, ${username}! 👋`);
            return;
        }
    }
    
    displayOutput('examplesOutput', '❌ No remembered user found!');
}

function forgetUser() {
    document.cookie = "rememberedUser=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    document.getElementById('loginUsername').value = '';
    displayOutput('examplesOutput', '🗑️ User forgotten. Goodbye! 👋');
}


// ============================================
// 5. STORING OBJECTS & ARRAYS
// ============================================

function storeUserObject() {
    // Create a JavaScript object
    const user = {
        name: "John Doe",
        age: 25,
        email: "john@example.com",
        hobbies: ["reading", "coding", "gaming"],
        isActive: true
    };
    
    // Convert object to JSON string and store
    localStorage.setItem('user', JSON.stringify(user));
    
    displayOutput('objectOutput', 
        `✅ Object stored in localStorage!\n\n` +
        `Original object:\n${JSON.stringify(user, null, 2)}\n\n` +
        `💡 Objects must be converted to JSON strings before storing!`
    );
}

function retrieveUserObject() {
    // Get the JSON string
    const userString = localStorage.getItem('user');
    
    if (!userString) {
        displayOutput('objectOutput', '❌ No user object found! Store one first.');
        return;
    }
    
    // Convert JSON string back to object
    const user = JSON.parse(userString);
    
    displayOutput('objectOutput',
        `✅ Object retrieved from localStorage!\n\n` +
        `Retrieved object:\n${JSON.stringify(user, null, 2)}\n\n` +
        `Accessing properties:\n` +
        `- Name: ${user.name}\n` +
        `- Age: ${user.age}\n` +
        `- Email: ${user.email}\n` +
        `- Hobbies: ${user.hobbies.join(', ')}\n` +
        `- Active: ${user.isActive}`
    );
}


// ============================================
// UTILITY FUNCTIONS
// ============================================

function displayOutput(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', function() {
    console.log('🎓 JavaScript Storage Tutorial Loaded!');
    console.log('📌 Try these console commands:');
    console.log('   localStorage.setItem("test", "value")');
    console.log('   localStorage.getItem("test")');
    console.log('   sessionStorage.setItem("temp", "data")');
    console.log('   document.cookie = "example=value"');
    
    // Display current storage status
    console.log('\n📊 Current Storage Status:');
    console.log(`   localStorage items: ${localStorage.length}`);
    console.log(`   sessionStorage items: ${sessionStorage.length}`);
    console.log(`   Cookies: ${document.cookie || 'None'}`);
});


// ============================================
// ADDITIONAL LEARNING NOTES (Check Console)
// ============================================

/*
📚 KEY DIFFERENCES:

1. localStorage:
   - Permanent storage
   - Shared across all tabs/windows
   - Use for: user preferences, app settings

2. sessionStorage:
   - Temporary storage (per tab)
   - Lost when tab closes
   - Use for: form data, multi-step processes

3. Cookies:
   - Sent to server with every request
   - Can set expiration
   - Use for: authentication, tracking

⚠️ IMPORTANT SECURITY NOTES:
- Never store sensitive data (passwords, credit cards) in storage
- localStorage/sessionStorage are vulnerable to XSS attacks
- Use httpOnly cookies for sensitive data
- Always validate and sanitize stored data

🎯 BEST PRACTICES:
- Check if storage is available before using
- Handle errors with try-catch
- Use JSON for complex data
- Clean up old data periodically
- Consider storage limits (5-10MB)

📝 STORAGE AVAILABILITY CHECK:
if (typeof(Storage) !== "undefined") {
    // localStorage and sessionStorage are supported
} else {
    // No Web Storage support
}
*/