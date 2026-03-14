function launchBrowser(browserName)
{
    if(browserName == "chrome")
        console.log("chrome")
    else if(browserName == "firefox")
        console.log("firefox")
    else if(browserName == "edge")
        console.log("edge")
    else
        console.log("other browser")
}
function runTests(testType)
{
    switch(testType)
    {
        case "smoke":
            console.log("smoke test")
            break;
        case "sanity":
            console.log("sanity test")
            break;
        case "regression":
            console.log("regression test")
            break;
        default:
            console.log("Other test type")
    }
}
launchBrowser("chrome")
launchBrowser("edge")
runTests("sanity")
runTests("endtoendtest")