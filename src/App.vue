<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input type="text" class="form-control" />
        </div>
        <button class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      }
    };
  }
};
</script>

<style></style>
