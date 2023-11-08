### TODO

- [ ] Alias on cv / curriculum seo
- [ ] Remove unwanted from repo
- [ ] Add new repo for project
- [ ] Add icons js for project
- [ ] Custom JH favicon
- [ ] Meta other
- [ ] Global styles
- [x] Background image is distorted
    - 840 height is about right
    - What is the height of pdf
- [ ] Pull in remote images
    - [ ] Black style
    - [ ] White/Printeable
    - [x] Link color
- [x] Layout
    - [ ] Chronological
    - [ ] Skills Based
    - [x] Typical C.V.
    - [x] Left col for title, period & Company ?
- [ ] Language Logic and how to handle this
    - [ ] Const with template vars ?
    - [ ] Figure how to do this language switch
    - [ ] React Router ?
- [x] Load content fetch useEffect / useCallback
- [ ] Page
    - [x] Custom background
        - [ ] Works however have to manually insert this background for each page
    - [ ] Flexbox is to continue implementing should we continue building
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
    - [x] List See if we get styling similar to website with icons + stcking
    - [x] Strongs ?
            - [x] This is some text. Some of it is` <Text style={{ fontFamily: 'italic font' }}`
        - Vertically stacked experience summary ? x3
    - [x] Icons
    - [ ] Education block
        - [x] 3 Col flexbox
        - [x] Add awards and
        - [x] Style awards ?
            - [] Move Certs up ?
    - [] Skills block ?

- [x] Data fetching
    - [x] Setup a json api
        - [x] Curriculum to json
            - [x] Jquery to generate json
        - [x] Fix CORS issues (Only Get)
    - [x] Setup a custom use-http.js / or useCallback directly
    - [ ] Clean up data before hand in desc '",\n," " '
    - [x] Use PHP and data atts to generate data feed
        - [ ] Fix bugs
    - [] Md to json ?
        - [x] I dont think feedback to user is a big concern but its neat
    - [x] Generic text filter function utils
- [x] Language handling !
    - [] Params from url to language switch integration
    - [x] Lang file
    - [x] Re-Template

### Techincal debt:

- [x] Repeatedly Downloading Pdfs and then opening them
    - render in browser !
        - See test.jsx <PDFViewer> and rendewr app cmp normally
- [ ] zoom pdf renderer 100% (defaultScale={1} ? Sure i saw this working before)
- [x] Issue when rendering and failing in bkg
    - Open new tab may fix issue
    - [ ] Capture errors from the pdf renderer (errror boundary)
- [] Render in browser rather than serverside , download button ?

### BUGS :

- [x] <VIEW /> Look at rendering methods to fix this
- [ ] Render crash see notes below
- [x] Background image throws error when adding page color bkg ?


### Design Review:

Most importantly skim over all of requirements and follow up with adjustments

- [x] Borders
    - Drop shadow ?
        - Cant be done
    - [x] Card
- [x] Font sizes
- [x] Image Relative Sizing
- [x] Element positioning like contact info

### Threat Analysis:

- [x] Background image
    - absolute positioning for Text components over an image
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
