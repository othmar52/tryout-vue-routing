<template>
  <div>
    <h1>COMPONENT: module 2 configurator</h1>
    <ul>
      <li>we dont have url argument which represents the configuration</li>
    </ul>
    <p>those links should add some configuration.</p>
    <ul>
      <li>
        <router-link to="/module2/someConf1">add <strong>someConf1</strong> for module 2</router-link>
      </li>
      <li>
        <router-link to="/module2/someConf2">add <strong>someConf2</strong> for module 2</router-link>
      </li>
      <li>
        <router-link to="/">back to module selector</router-link>
      </li>
    </ul>
  </div>
</template>
