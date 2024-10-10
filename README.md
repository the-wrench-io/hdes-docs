# This repository has been deprecated and is no longer maintained.
Codebase has been moved and is now maintained in https://github.com/digiexpress-io/digiexpress-parent

## theWrench Documentation

React-Typescript documentation app styled with Material UI and parsing/rendering Markdown files with dandy-doc library.

* Documentation site viewable here: https://docs.dialob.io/ 
* dandy-doc library repo: https://github.com/jocelynmutso/dandy-doc

---

## Development environment

### Running locally: Requirements

* yarn 1.22.10
* node v15.0.1

* Install dependencies: `yarn install`
* Run locally: `yarn start`

### Build and deploy

* Create production build: `yarn build`
* Deploy: `yarn run deploy`

---

## Naming conventions and quirks


### Topics and Subtopics: The backbone of the menu system

The left menu is populated by Topics and their Subtopics. The left menu is created via the underlying folder / file structure, and it is ordered via numeric prefixes. 

Currently, this menu system supports nesting up to TWO levels deep. This means that there can be a Topic and its Subtopic, but there can not be a Sub-subtopic.

**Topic**: A folder name. The left menu is populated by rendering Folder names as Topics; i.e., the names of your folders which contain your Markdown files will be rendered as Topic names in the left menu.  

**Subtopic**: A Markdown file name. The left menu renders Markdown file names as subtopics. 

Topic folders appear in the left menu **only when** they have a subtopic inside. In other words, an empty topic folder will not be rendered!

### Writing file (subtopic) names: Conventions and rules

1. **Capitalisation**: Topic and file names do not need to be capitalised. They will automatically be capitalised by dandy-doc.
2. **Spaces**: Use an underscore to create spaces between words in topic and Markdown file names. Dandy-doc will automatically replace them with empty strings upon rendering.
3. **Use of underscores**: Topic and subtopic names **can not** begin with an underscore. This can cause build failure.
4. **Ordering**: To ensure your items are arranged in the desired order, give each topic and subtopic a numeric ordering prefix. See next section for these rules.

Example of good Topic (Folder) naming:

* `045_basic_functionalities`
* `002_overview_of_features`

Examples of good Subtopic (Markdown file) naming:

* `003_use_of_tag_feature.md`
* `005_troubleshooting.md`

---

## Ordering menu items

### Appending prefixes to topic and subtopic names for setting item order

* Topic and subtopic names may be given numeric prefixes for ordering purposes
* The format for a prefix is three digits, followed by an underscore. 

Example:

Prefix: `003_`

Prefix applied to a markdown file: `003_my_best_topic.md`


### Quirks: Use of colons

* In a topic name, using colons is supported
* **In a subtopic name, using colons will cause build failure**

Example:

Topic name: `003_advanced_functionality:_setting_ids` --> This will work fine, as it is a **topic name**  
Subtopic name: `109_setting_ids:_first_steps.md` --> This will cause build failure, because this markdown file name includes a colon. 

To solve this problem, simply remove the colon from the markdown file name.

---

### Linking

#### Creating anchor links

Set anchor link: `[Clickable text](#anchor-link)`

Match anchor link: `{#anchor-link}`

#### Using links

Linking to a page without a specified anchor:

`[Page link](#100_basic_operations/001_groups)`


Linking to a page with a specified anchor:

`[Page and anchor link](#105_advanced_operations/023_csv/walkthrough)`

### Adding images

* Images are placed in public/images/myFolders
* To link to images, use this structure `![Image alt text](basicOperations/search-filter.png)`
  * the first two levels of the path can be ignored: i.e., `public/images`


## Creating theme

TODO


## Adding theme / brand / logo

1. Logo image must be placed in `public/images`
2. Theme must be placed `themes/myTheme`
3. Update imports/exports in `themes/index.tsx`
4. Edit the code in `src/index.tsx` to add image, manipulate its size, and do theme imports

```
src/index.tsx

const brandImage = <img src={logo} style={{height: 40, width: 225}} alt="logo"/>;
ReactDOM.render( 
  <Dandy theme={myTheme} md={md} brand={{logo: brandImage}} />
  ,
  document.getElementById('root')
);

```



