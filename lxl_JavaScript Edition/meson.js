//统一基本操作
function testDir(dirName){
    var test_dir = file.exists(dirName);
    if (test_dir == false) {
        file.mkdir(dirName);
    }
}
function testFile(fileName){
    var test_dir = file.exists(fileName);
    if (test_dir == false) {
        return false;
    }
}

//数据储存及调用方法

//对象处理逻辑
class objectDT {
    constructor($class,$object,$property,$value) {
        this.$class = $class;
        this.$object = $object;
        this.$property = $property;
        this.$value = $value;
    }
    push() {
        var $file = file.open(".\\mesonDB\\" + this.$class + "\\" + this.$object + "\\" + this.$property + ".mesondb",1);
        $file.writeSync(this.$value);
    }
    pull() {
        if (testFile(".\\mesonDB\\" + this.$class + "\\" + this.$object + "\\" + this.$property + ".mesondb") == false) {
            return false;
        }
        else {
            var $file = file.open(".\\mesonDB\\" + this.$class + "\\" + this.$object + "\\" + this.$property + ".mesondb",0);
            return $file.readAllSync();
        }
    }
}
class objectCT {
    constructor(path,$class,$object,$property,$value) {
        this.path = path
        this.$class = $class;
        this.$object = $object;
        this.$property = $property;
        this.$value = $value;
    }
    push() {
        var $file = file.open(this.path + "\\" + this.$class + "\\" + this.$object + "\\" + this.$property + ".mesondb",1);
        $file.writeSync(this.$value);
    }
    pull() {
        if (testFile(this.path + "\\" + this.$class + "\\" + this.$object + "\\" + this.$property + ".mesondb") == false) {
            return false;
        }
        else {
            var $file = file.open(this.path + "\\" + this.$class + "\\" + this.$object + "\\" + this.$property + ".mesondb",0);
            return $file.readAllSync();
        }
    }
}
//self处理逻辑
class selfDT {
    constructor($property,$value) {
        this.$property = $property;
        this.$value = $value;
    }
    push() {
        var $file = file.open(".\\mesonDB\\self\\" + this.$property + ".mesondb",1);
        return $file.writeSync(this.$value);
    }
    pull() {
        if (testFile(".\\mesonDB\\self\\" + this.$property + ".mesondb") == false) {
            return false;
        }
        else {
            var $file = file.open(".\\mesonDB\\self\\" + this.$property + ".mesondb",0);
            return $file.readAllSync();
        }
    }
}
class selfCT {
    constructor(path,$property,$value) {
        this.path = path;
        this.$property = $property;
        this.$value = $value;
    }
    push() {
        var $file = file.open(this.path + "\\self\\" + this.$property + ".mesondb",1);
        return $file.writeSync(this.$value);
    }
    pull() {
        if (testFile(this.path + "\\self\\" + this.$property + ".mesondb") == false) {
            return false;
        }
        else {
            var $file = file.open(this.path + "\\self\\" + this.$property + ".mesondb",0);
            return $file.readAllSync();
        }
    }
}

//lxl模块导出
function push_object($class,$object,$property,$value) {
    var push = new objectDT($class,$object,$property,$value);
    push.push();
}
function pull_object($class,$object,$property) {
    var pull = new objectDT($class,$object,$property);
    return pull.pull();
}
function push_object_CT(path,$class,$object,$property,$value) {
    var push = new objectCT(path,$class,$object,$property,$value);
    push.push();
}
function pull_object_CT(path,$class,$object,$property) {
    var pull = new objectCT(path,$class,$object,$property);
    return pull.pull();
}
function push_self($property,$value) {
    var push = new selfDT($property,$value);
    push.push();
}
function pull_self($property) {
    var pull = new selfDT($property);
    return pull.pull();
}
function push_self_CT(path,$property,$value) {
    var push = new selfCT(path,$property,$value);
    push.push();
}
function pull_self_CT(path,$property) {
    var pull = new selfCT(path, $property);
    return pull.pull();
}

lxl.export(push_object,"mesonDB_push_object");
lxl.export(pull_object,"mesonDB_pull_object");
lxl.export(push_object_CT,"mesonDB_push_object_CT");
lxl.export(pull_object_CT,"mesonDB_pull_object_CT");
lxl.export(push_self,"mesonDB_push_self");
lxl.export(pull_self,"mesonDB_pull_self");
lxl.export(push_self_CT,"mesonDB_push_self_CT");
lxl.export(pull_self_CT,"mesonDB_pull_self_CT");
