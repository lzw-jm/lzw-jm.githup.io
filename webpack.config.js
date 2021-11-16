// Generated using webpack-cli https://github.com/webpack/webpack-cli
const fs = require('fs');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const conf = getConfig({
  modules:['index','articleDetail','article']  //新增模块
});
const config = {
  entry:conf.entry,
  output: {
    filename: '[name]/[name].[chunkhash].js',
    path: path.resolve(__dirname, "docs"),
    clean: true,
  },
  devServer: {
    open: true,
    host: "localhost",
    hot:true,
    static: './docs',
  },
  plugins: [
    ...conf.html
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.less$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

function getConfig(props){
  let entry = {};
  let html = [];
  let modules = props.modules || [];
  modules.forEach(name=>{
    entry[name] = [`./src/${name}/${name}.js`, `./src/${name}/${name}.less`];
    html.push(new HtmlWebpackPlugin({
      template: `src/${name}/${name}.html`,
      filename: `${name}.html`,
      chunks: [`${name}`]
    }))
  })
  return {
    entry,
    html
  }
}

module.exports = async () => {
  if (isProduction) {
    config.mode = "production";
    config.plugins.push(new MiniCssExtractPlugin({
      filename: '[name]/[name].[contenthash].css'
    }));
  } else {
    config.mode = "development";
  }
  return config;
};

/**
 * @description 是用来创建文件夹的
 * @author reg 
 * @param baseDir string 
 * */
 class FileSystem {
  constructor(props) {
    this.baseDir = props.baseDir;
  }
  /**
   * @param params object
   */
  generateModules(params) {
    let { modules, template = 'template', replace = false } = params;
    modules.forEach(module => this.createModule(module, template, replace));
  }
  /**
   * @param  module string 文件夹名称
   * @param  replace boolean 是否全部替换
   * @param  template string  被copy模板名称
   */
  async createModule(module, template, replace) {
    let templateDir = await this.readDir(template);
    let dirName = `${this.baseDir}/${module}`;
    let isExist = await this.isExist(dirName);
    if (!isExist) {
      await this.createDir(module);
    }
    templateDir.forEach(async moduleName => {
      let sufName = FileSystem.getSufName(moduleName);
      let newName = `${this.baseDir}/${module}/${module}.${sufName}`;
      let isExist = await this.isExist(newName);
      let oldName = `${this.baseDir}/${template}/${template}.${sufName}`;
      if(!replace && isExist){
        return;
      }
      this.copyFile(oldName,newName);
    })
  }
  /**
   * @description 获取文件后缀的方法
   * @param  template string
   * @returns 文件的后缀
   */
  static getSufName(template) {
    return /(?<=\.)[a-z]+\b/.exec(template)[0];
  }
  /**
   * @description copy文件
   * @param  oldName string 被copy的文件名称
   * @param  name string copy成的文件名称
   */
  copyFile(oldName, newName) {
    return new Promise((resolve, reject) => {
      fs.copyFile(oldName, newName, function () {
          resolve(true);
      })
    })
  }
  /**
   * @description 检测文件是否存在
   * @param  name 被检测文件名字
   */
  isExist(filename) {
    return new Promise((resolve, reject) => {
      fs.access(filename, function (err) {
        resolve(err ? false : true);
      })
    })
  }

  /**
   * @description 读取文件夹
   * @param  template 要读取的文件夹的名称
   * @returns array 返回当前文件夹下面的所有文件
   */
  readDir(template) {
    return new Promise((resolve, reject) => {
      fs.readdir(`${this.baseDir}/${template}`, function (err, data) {
        if (err) {
          reject();
        } else {
          resolve(data);
        }
      })
    })
  }
  /**
   * @description 创建文件夹
   * @param module string 要创建的文件夹名称
   */
  createDir(module) {
    return new Promise((resolve, reject) => {
      fs.mkdir(`${this.baseDir}/${module}`, function (err) {
        resolve(err ? false : true);
      })
    })
  }
}
