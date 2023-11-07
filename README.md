## React PDF Generator

### TODO
- [] Alias on cv / curriculum seo
- [ ] Remove unwanted from repo 
- [] Add new repo for project
- [] Add icons js for project
- [ ] Custom JH favicon
- [ ] Meta other 
- [] Global styles
- [x] Background image is distorted 
    - !840 height is about right
    - What is the height of pdf ¿
- [] Pull in remote images
    - [] Black style
    - [] White/Printeable
    - [x] Link color
- [x] Layout 
    - [] Chronological
    - [] Skills Based
    - [] Standard Typical C.V. 
    - [x] Left col for title, period & Company ?

- [] Language Logic and how to handle this
    - [ ] Const with template vars ?
    - [ ] Figure how to do this language switch
    - [ ] React Router ?
- [x] Load content fetch useEffect / useCallback
- [ ] Page
    - [x]Custom background 
        - [] Works however have to manually insert this background for each page
    - !Flexbox is to continue implementing should we continue building
- [ ] Header
    - [x] Custom Background
    - [x] Profile image
    - [x] My name
    - [x] Subtitle 1 Custom Bold font
    - [x] Subtitle 2 Custom Font
- [x] About me block ?
    - [x] Main text
    - [x] Contact info 
- [ ] Experiences block
    - [ ] Main Heading block
    - [x] 3 col flexbox 
        - List See if we get styling similar to website with icons + stcking
        - Strongs ?
            - [x]  This is some text. Some of it is` <Text style={{ fontFamily: 'italic font' }}`
        - [x] Vertically stacked experience summary ? x3 
            - [x] Icons
    - [] Education block
        - [x] 3 Col flexbox
        - [x] Add awards and
        - [x] Style awards  ?
            - Move Certs up ?
    - Skills block ?

- [] Data fetching
     - [x] Setup a json api 
        - [x] Curriculum to json 
            - [x] Jquery to generate json
        - [x] Fix CORS issues (Only Get)
     - [x] Setup a custom use-http.js / or useCallback directly 
     - [ ] Clean up data before hand in desc '",\n,"   " '
     - [x] Use PHP and data atts to generate data feed
        - [] Fix bugs
     - [] Md to json ?
        - [x] I dont think feedback to user is a big concern but its neat

    - [x] Generic text filter function utils

 - [ ] Language handling !
    - [ ] Params from url to language switch integration
    - [ ] Lang file
    - [ ] Re Template

### Techincal debt: 
        - [x] Repeatedly Downloading Pdfs and then opening them
            - render in browser !
                - See test.jsx <PDFViewer> and rendewr app cmp normally
        - [] zoom pdf renderer 100% (defaultScale={1} ? Sure i saw this working before)
        - [x] Issue when rendering and failing in bkg
            - Open new tab may fix issue
            - [] Capture errors from the pdf renderer (errror boundary) 
            - [x] ~~pull/scrape html from the web because of cors issues.~~
        - [] Render in browser rather than serverside , download button ?

### BUGS :
    - <VIEW /> Look at rendering methods to fix this
    - [] Render crash see notes below
    - [] Background image throws error when adding page color bkg ?

### Design Review:
Most importantly skim over all of requirements and follow up with adjustments
    - [x] Borders
         - [] Drop shadow
         - [x] Card
    - [x] Font sizes
    - [x] Image Relative Sizing
    - [x] Element positioning like contact info

### Threat Analysis:
    - [x] Background image
        -  absolute positioning for Text components over an image
    - Will this work on the web
    - [x] reliably pulling content from my cv html / web ?
        - some styles work 
    - how much markup can be pulled in and will work ?
      - Works but seems like an ugly solution https://www.npmjs.com/package/react-pdf-html
    - [x] can styling be integrated directly from stylesheet ?
        - [x] Box-Shadows: no ?
        - [x] Circular border ? yes
        - [x] Custom fonts ? Yes
        - [x] Transparen background ? Yes
        - Yes, but not all styles work. In react dom yes but not in pdf doc
    - flex box works / horizontal aligned divs
    - [x] How to fit across various pages
        - Has built in page breaks wrapper engine set wrap={false}
         

###  BUG Render Crash  :

Optimize your PDF content: If your PDF contains large images or complex vector graphics, consider optimizing these assets to reduce their file size.

Render PDF progressively: Instead of rendering the entire PDF at once, consider rendering it page by page or section by section. This can help reduce the memory usage.

Increase memory limit: If you're using Node.js to serve your application, you can increase the memory limit using the --max-old-space-size flag. For example, node --max-old-space-size=4096 yourScript.js will increase the memory limit to 4GB.

Use a PDF.js viewer: PDF.js is a JavaScript library that renders PDFs in the browser using HTML5 and JavaScript, without the need for a server. It's more efficient and might solve your issue.

Remember to always test your application in multiple browsers and devices to ensure the best performance and compatibility.

*Imperative programming* tells us how to do i
*Declarative programming* describes what you’re trying to accomplish without defining how to do it.

