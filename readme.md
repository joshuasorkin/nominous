Welcome to Nominous, an API for providing original content derived from a user's first name and birth year.

To access the API, simply make a GET request to:

```
nominous.herokuapp.com/api/[first name]/[birth year]
```

The returned value will be JSON in the form:

```
{
    nameAnalysis: [a paragraph of content unique to this name/year combination]
}
```

If there is an error, the returned value will be:

```
{
    error: [Error message]
}
```

`[First name]` can be any value, although you may experience unusual behavior with the reserved characters: **! * ' ( ) ; : @ & = + $ , / ? % # [ ]**

`[Birth year]` must be the current year or earlier.

Visiting the following URL in your browser will allow you to hear a brief melody that is unique to the name/year pair:

```
nominous.herokuapp.com/song/[first name]/[birth year]
```