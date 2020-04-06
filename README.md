# pivot
Use pivot 🐍 to create fast &amp; unobtrusive interface for your updates or changelog bulletin.

### packages used
we're using quite a lot of open-source projects, thanks to all of them:

* [Express]
* [Dotenv]
* [Method Override]
* [Mongoose]
* [Body-parser]

And of course pivot itself is open source with a [public repository](#pivot)
 on GitHub.
**We are using MongoDB for the database.**

### Installation

pivot requires [Node.js](https://nodejs.org/) v7+ to run.

You'd also need to create a ``.env`` file with the required [variables](#env).

Install the dependencies and start the server.

```sh
$ cd pivot
$ yarn
$ node app
```

For production environments...

```sh
$ yarn
```
Delete the Environment variable `DEVELOPMENT`, instead of setting it to `false`. Also set `PRODUCTION_DB_URI` to your remote MongoDB URL.

### Routes
Here are the following routes that are available:

#### GET /changelog
Fetches all the available changlog entries in the descending order of their date/time created.

#### GET /changelog/:reference
Fetches all the available changlog entries for a given reference.

#### GET /changelog/delete/:id
Deletes the specified changlog entry for a given id. Also known as the `_id` in MongoDB.

#### POST /changelog/add
Adds a new changlog entry to the list of available changlog entries. The following fields are required to add a new changelog:
| Field | Description | Required |
| ------ | ------ | ------ |
| title | Title of the changelog. | Yes |
| details | Details and the actual changelog. | Yes |
| reference | Reference code for finding(tags) | Yes |
| category | Category or department of the changelog | No |
| author | Author of the changelog | Yes |

### env

pivot has the following environment variables that are required

| Variable Name | Value |
| ------ | ------ |
| PRODUCTION_DB_URI | Not required in the development environment. |
| LOCAL_DB_URI | Required for the development environment. |
| DEVELOPMENT | **Required to be deleted when run in Production mode.** |

### Todos

 - [-] Write tests
 - [-] Add support for other databases

### Contributing
I'd love to see you collaborate and contribute on this project. You can always pull a PR and I'd be happy to review it. If you find any issues then feel free to create one.

### Collaborators
 - Utkarsh Dubey <utkarsh.dubey3jan@gmail.com>
 - Dhruv Bhatia <thedhruv26@gmail.com>
