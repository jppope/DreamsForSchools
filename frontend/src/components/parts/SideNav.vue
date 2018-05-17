<template>
  <aside class="column is-2 aside hero is-fullheight is-hidden-mobile">
    <div>
      <div class="compose has-text-centered">
        <img src="http://placehold.it/150x50&text=dreamsforschools.org">
        <!-- <a class="button is-danger is-block is-bold is-expaned">
          <span class="icon">
            <i class="fa fa-upload"></i>
          </span>&nbsp;&nbsp;
          Upload
        </a> -->
      </div>
      <div class="main">
        <router-link to="/home" class="item">
          <span class="icon">
            <i class="fa fa-home"></i>
          </span>
          <span class="name">Home</span>
        </router-link>
        <router-link to="/admin" class="item">
          <span class="icon">
            <i class="fa fa-cogs"></i>
          </span>
          <span class="name">Admin</span>
        </router-link>

        <router-link to="/mentor" class="item">
          <span class="icon">
            <i class="fa fa-envelope-o"></i>
          </span>
          <span class="name">Mentor</span>
        </router-link>
        <router-link to="/judge" class="item">
          <span class="icon">
            <i class="fa fa-folder-o"></i>
          </span>
          <span class="name">Judges</span>
        </router-link>
      </div>
    </div>
</aside>
</template>
<style>

.aside {
  display:block;
  background-color: #F9F9F9;
  border-right: 1px solid #DEDEDE;
  min-width: 200px;
}
.messages {
  display:block;
  background-color: #fff;
  border-right: 1px solid #DEDEDE;
}
.message {
  display:block;
  background-color: #fff;
}
.aside .compose {
  height: 95px;
  margin:0 -10px;
  padding: 25px 30px;
}
.aside .compose .button {
  color: #F6F7F7;
}
.aside .compose .button .compose {
  font-size: 14px;
  font-weight: 700;
  padding: 25px 30px;
}
.aside .main {
  padding: 20px 40px;
  color: #6F7B7E;
}
.aside .title {
  color: #6F7B7E;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}
.aside .main .item {
  display: block;
  padding: 10px 0;
  color: #6F7B7E;
}
.aside .main .item.active {
  background-color: #F1F1F1;
  margin: 0 -50px;
  padding-left: 50px;
}
.aside .main .item:active,.aside .main .item:hover {
  background-color: #F2F2F2;
  margin: 0 -50px;
  padding-left: 50px;
}
.aside .main .icon {
  font-size: 19px;
  padding-right: 30px;
  color: #A0A0A0;
}
.aside .main .name {
  font-size: 15px;
  color: #5D5D5D;
  font-weight: 500;
}
.messages {
  padding: 40px 20px;
}
.message {
  padding: 40px 20px;
}
.messages .action-buttons {
  padding: 0;
  margin-top: -20px;
}
.message .action-buttons {
  padding: 0;
  margin-top: -5px;
}
.action-buttons .control.is-grouped {
  display: inline-block;
  margin-right: 30px;
}
.action-buttons .control.is-grouped:last-child {
  margin-right: 0;
}
.action-buttons .control.is-grouped .button:first-child {
  border-radius: 5px 0 0 5px;
}
.action-buttons .control.is-grouped .button:last-child {
  border-radius: 0 5px 5px 0;
}
.action-buttons .control.is-grouped .button {
  margin-right: -5px;
  border-radius: 0;
}
.pg {
  display: inline-block;
  top:10px;
}
.action-buttons .pg .title {
  display: block;
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 3px;
  font-size:12px;
  color: #AAAAA;
}
.action-buttons .pg a{
  font-size:12px;
  color: #AAAAAA;
  text-decoration: none;
}
.is-grouped .button {
  background-image: linear-gradient(#F8F8F8, #F1F1F1);
}
.is-grouped .button .fa {
  font-size: 15px;
  color: #AAAAAA;
}
.inbox-messages {
  margin-top:60px;
}
.message-preview {
  margin-top: 60px;
}
.inbox-messages .card {
  width: 100%;
}
.inbox-messages strong {
  color: #5D5D5D;
}
.inbox-messages .msg-check {
  padding: 0 20px;
}
.inbox-messages .msg-subject {
  padding: 10px 0;
  color: #5D5D5D;
}
.inbox-messages .msg-attachment {
  float:right;
}
.inbox-messages .msg-snippet {
  padding: 5px 20px 0px 5px;
}
.inbox-messages .msg-subject .fa {
  font-size: 14px;
  padding:3px 0;
}
.inbox-messages .msg-timestamp {
  float: right;
  padding: 0 20px;
  color: #5D5D5D;
}
.message-preview .avatar {
  display: inline-block;
}
.message-preview .top .address {
  display: inline-block;
  padding: 0 20px;
}
.avatar img {
  width: 40px;
  border-radius: 50px;
  border: 2px solid #999;
  padding: 2px;
}
.address .name {
  font-size: 16px;
  font-weight: bold;
}
.address .email {
  font-weight: bold;
  color: #B6C7D1;
}
.card.active {
  background-color:#F5F5F5;
}
</style>
