
```js

  <Form onSubmit={this.handleSubmit}>
  <Form.Label>Username:
    <Form.Control type="text" name="name" onInput={this.handleInput}/>
  </Form.Label>

  <Form.Group controlId='firstName'>
    <Form.Label>First Name:</Form.Label>
    <Form.Control type="text"/>
  </Form.Group>

  <Form.Label htmlFor="lastName">Last Name:</Form.Label>
  <Form.Control type="text" name="lastname" id="lastName"/>

  <Form.Group>
    <p>Selected Numbers</p>
    <Form.Select name="selected" onChange={this.handleSelect}>
      <option value="all">All</option>
      <option value="even">Even</option>
      <option value="odd">Odd</option>
    </Form.Select>
  </Form.Group>
  <Button type="submit">Submit</Button>
</Form>

```

```js

<form onSubmit={this.handleSubmit}>
          <label>
          {/* with no back slash we get error */}
            <input type="text" name="userName" onInput={this.handleInput} />
          </label>
          {/* also add a drop down for users to select */}
          <fieldset>
            <legend>Selected Numbers</legend>
            <select name="selected" onChange={this.handleSelect}>
              <option value="all">All</option>
              <option value="even">Even</option>
              <option value="odd">Odd</option>
            </select>
          </fieldset>
          {/* how do we submit a form, there are several ways this is similar to
           201 lets add a button, add the type for react be explicit for reacts sake
          So now add event listener just like on click
           */}
          <button type="submit">Submit</button>
        </form>

        ```
