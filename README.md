# CSS Blitz

Our semi-weekly challenge where we show an image that participants will have to copy and write code for in a very limited time period -- usually 15-20 minutes. An additional 15-20 mins to showcase each participant's contribution to the challenge. It's fun!

It's a great opportunity for developers to learn basic to advanced CSS and HTML -- which we know is still quite a challenge for most people even now. At the same time, for experienced designers/developers to work on efficient ways to approach things.

When you think you know a lot about web designing, you are actually wrong with CSS Blitz.

## Project setup

Requirements:
```
nodejs 18.16.0
```

## Development

To start developing, run
```bash
$ yarn
$ yarn develop
```

## Adding a new Blitz

1. Create a new branch for your activity.
2. Duplicate `src/content/TEMPLATE.md` and rename it to the name of the blitz.
3. Fill in the details. Feel free to edit the markdown.
  - `slug` - The URL slug of the blitz. This will be used to generate the URL of the activity.
  - `date` - The date of the blitz. This will be used to sort the activities.
  - `title` - You get it.
  - `type` - The type of the blitz. We're only doing `css` right now but we might add more in the future. Stay tuned!
  - `image` - The image preview of the blitz. Add it to `src/images`.
  - `codpen` - Codepen URL.
  - `author` - Kimi no nawa.
  - `github` - Your Github URL. Leave it blank if you don't want to share it.
  - `entries` - The list of participant's entries. You add this after the activity.
    - `name` - The name of the participant.
    - `url` - The URL of the participant's Codepen.
4. Create a pull request.
5. Share the pull request when it's time for the activity.
6. Edit the `entries` after the activity.
7. Merge the pull request. It _should_ automatically build and deploy the site.
