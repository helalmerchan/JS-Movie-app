// first test 
const permissions = [
    'permission.department.view',
    'permission.department.edit',
    'permission.department.create',
    'permission.department.delete',

    'permission.designation.view',
    'permission.designation.edit',
    'permission.designation.create',
    'permission.designation.delete',

    'permission.operationgroup.view',
    'permission.operationgroup.edit',
    'permission.operationgroup.create',
    'permission.operationgroup.delete',

    'permission.operator.view',
    'permission.operator.edit',
    'permission.operator.create',
    'permission.operator.delete'
  ];

  const mutatedPermissions = [
    {
      groupName: 'department',
      permissions: [
        'permission.department.view',
        'permission.department.edit',
        'permission.department.create',
        'permission.department.delete'
      ]
    },
    {
      groupName: 'designation',
      permissions: [
        'permission.designation.view',
        'permission.designation.edit',
        'permission.designation.create',
        'permission.designation.delete'
      ]
    },
    {
      groupName: 'operationgroup',
      permissions: [
        'permission.operationgroup.view',
        'permission.operationgroup.edit',
        'permission.operationgroup.create',
        'permission.operationgroup.delete'
      ]
    },
    {
      groupName: 'operator',
      permissions: [
        'permission.operator.view',
        'permission.operator.edit',
        'permission.operator.create',
        'permission.operator.delete'
      ]
    }
  ];


// Second test 
const firstObj = {
  name: "Jhon",
  age: 30,
  subjects: ["ban", "Eng", "Math"],
}

firstObj.name = "Tanya";
firstObj.subjects[1] = "Ict";
console.log(firstObj);

// const output = {
//   name: "Tanya",
//   age: 30,
//   subjects: ["ban", "Ict", "Math"],    
// }


